import {
  createSlice,
  createAsyncThunk,
  isPending,
  isFulfilled,
  isRejected,
} from '@reduxjs/toolkit';
import { status } from 'utils/miscHelpers';
import { TOKEN_KEY } from 'config/defaults';
import { getItem, setItem, removeItem } from 'utils/localStorage';
import axios from 'axios';

const initialStateAuth = {
  status: status.idle,
  restore: false,
  error: null,
  user: {},
  token: null,
};

export const registerUser = createAsyncThunk(
  'user/register',
  async (payload, { dispatch }) => {
    //TODO: post to registration endpoint and pass data obj to extraaReducer
  }
);

export const localLogin = createAsyncThunk(
  'auth/localLogin',
  async (payload, { dispatch }) => {
    //TODO: post to login endpoint and pass data obj to extraaReducer
  }
);

export const restoreSession = createAsyncThunk(
  'auth/restoreSession',
  async (payload, { getState, dispatch }) => {
    const state = getState();
    const { auth } = state;
    //TODO: set session restoration method, plan is to restore jwt trough stored cookie
  },
  {
    condition: (payload, { getState }) => {
      const { auth } = getState();
      //to avoid multiple restore attempts at the same time
      if (
        auth.status === status.pending ||
        auth.status === status.loading ||
        auth.status === status.error ||
        auth.status === status.success
      ) {
        return false;
      }
    },
  }
);

const isPendingAction = isPending(registerUser, localLogin, restoreSession);
const isFulfilledAction = isFulfilled(registerUser, localLogin, restoreSession);
const isRejectedAction = isRejected(registerUser, localLogin, restoreSession);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
      setItem(TOKEN_KEY, payload);
      //setting all axios headers to include token
      axios.defaults.headers.common.Authorization = state.token;
    },
    restoreToken: (state, { payload }) => {
      state.token = getItem(TOKEN_KEY);
    },
    logout: (state, { payload }) => {
      state.token = null;
      state.restore = false;
      state.user = {};
      state.error = null;
      state.status = status.reset;
      removeItem(TOKEN_KEY);

      //removing default axios header
      delete axios.defaults.headers.common.Authorization;

      //setting item in localstorage to inform other open tabs to logout
      setItem('__logout__', Date.now());
    },
    setStateReset: (state, { payload }) => {
      state.status = status.idle;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPendingAction, (state, { payload }) => {
      state.status = status.pending;
    });
    builder.addMatcher(isFulfilledAction, (state, { payload }) => {
      state.status = status.success;
      state.restore = true;
      state.user = payload;
    });
    builder.addMatcher(isRejectedAction, (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    });
  },
});

export const {
  setToken,
  logout,
  setStateReset,
  restoreToken,
} = authSlice.actions;

export default authSlice;

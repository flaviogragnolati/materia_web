import { createSlice } from '@reduxjs/toolkit';

const initialStateAuth = {
  test: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    testReducer: (state, { payload }) => (state.test = !state.test),
  },
  extraReducers: {},
});

export const { testReducer } = authSlice.actions;

export default authSlice;

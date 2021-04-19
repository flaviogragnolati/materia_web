import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import BackdropLoading from 'components/BackdropLoading';

import {
  userSelector,
  authStatusSelector,
  tokenSelector,
  restoreSessionSelector,
} from 'redux/selectors';

import { AuthContext } from './authContext';

import { restoreSession, logout, restoreToken } from './authSlice';

function AuthProvider({ children }) {
  const dispatch = useDispatch();

  const user = useSelector(userSelector);
  const authStatus = useSelector(authStatusSelector);
  const token = useSelector(tokenSelector);
  const restore = useSelector(restoreSessionSelector);

  //? logout for all open tabs
  window.addEventListener('storage', (event) => {
    if (event.key === '__logout__') {
      dispatch(logout());
    }
  });

  useEffect(() => {
    if (authStatus === 'idle' && !token) {
      dispatch(restoreToken());
    }
    if (token && !restore) {
      dispatch(restoreSession());
    }
  }, [authStatus, token, restore, dispatch]);

  return (
    <AuthContext.Provider value={user}>
      {authStatus === 'pending' && <BackdropLoading />}
      {/* //TODO: add support for loading status, to avoid unwanted timeouts */}
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  const user = useContext(AuthContext);
  if (user === undefined) {
    throw new Error(
      `user is UNDEFINED.
      1. useAuthState needs to be called within the AuthProvider scope, or;
      2. Object passed from (redux - store) is undefined.`
    );
  }
  if (Object.keys(user).length === 0 && user.constructor === Object) {
    return null;
  }

  return user;
};

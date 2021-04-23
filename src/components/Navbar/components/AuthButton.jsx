import React from 'react';
import { Button } from '@material-ui/core';

function AuthButton({ type, ...rest }) {
  if (type === 'login') {
    return (
      <Button variant="contained" color="primary">
        Login
      </Button>
    );
  } else if (type === 'register') {
    return (
      <Button variant="outlined" color="secondary">
        Registrarse
      </Button>
    );
  }

  return null;
}

export default AuthButton;

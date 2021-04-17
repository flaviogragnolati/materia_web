import React from 'react';
import { createRoutes, routes } from './routes';

function AppRoutes() {
  return <>{createRoutes(routes)}</>;
}

export default AppRoutes;

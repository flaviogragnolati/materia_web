import { Route, Switch } from 'react-router-dom';
// Auth components
import PublicRoute from 'context/auth/PublicRoute';

// Views || Components to render in routes
import HomeView from 'views/HomeView';
import NotFound from 'components/NotFound';

export const routes = [
  {
    path: ['', '/', '/home'],
    component: HomeView,
    access: 'public',
    exact: true,
  },
  {
    path: ['/404', 'notFound', 'not-Found'],
    component: NotFound,
    access: 'public',
  },
];

export const createRoutes = (routes) => {
  if (routes.length < 1) return null;
  return (
    <Switch>
      {routes.map((route, idx) => {
        if (routes.length === idx + 1) {
          return <Route component={NotFound} />;
        }
        switch (route.access) {
          case 'public':
            return (
              <PublicRoute
                key={route.path + idx}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          default:
            console.error('ACCESS LEVEL NOT DEFINED');
            return (
              <Route
                key={route.path + idx}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            );
        }
      })}
    </Switch>
  );
};

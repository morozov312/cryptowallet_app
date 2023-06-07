import { ROUTES } from './routes';
import Home from 'components/pages/Home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: ROUTES.base,
    element: <Home />,
  },
]);

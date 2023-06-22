import { ROUTES } from './routes';
import Home from 'components/pages/Home';
import Wallet from 'components/pages/Wallet';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: ROUTES.base,
    element: <Home />,
  },
  {
    path: ROUTES.wallet,
    element: <Wallet />,
  },
]);

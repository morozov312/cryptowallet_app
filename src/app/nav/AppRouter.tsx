import { ROUTES } from './routes';
import Home from 'pages/Home';
import Wallet from 'pages/Wallet';
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

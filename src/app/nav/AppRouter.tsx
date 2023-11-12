import { ROUTES } from './routes';
import { createBrowserRouter } from 'react-router-dom';
import {Home, Wallet} from "pages";

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

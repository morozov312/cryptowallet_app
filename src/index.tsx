import './assets/styles/index.css';
import ErrorBoundaryProvider from './components/providers/ErrorBoundaryProvider';
import { store } from './redux/store';
import { router } from 'components/nav/AppRouter';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <ErrorBoundaryProvider>
      <ToastContainer position='top-right' theme='colored' />
      <RouterProvider router={router} />
    </ErrorBoundaryProvider>
  </Provider>,
);

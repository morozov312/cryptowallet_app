import { store, ErrorBoundaryProvider } from './app';
import './shared/ui/assets/styles/index.css';
import { router } from 'app/nav/AppRouter';
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

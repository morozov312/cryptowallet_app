import './assets/styles/index.css';
import AppProvider from './components/providers/AppProvider';
import { store } from './redux/store';
import { router } from 'components/nav/AppRouter';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </Provider>,
);

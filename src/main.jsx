import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  RouterProvider
} from "react-router-dom";
import './index.css';
import store, { persistor } from './redux/store.js';
import router from './Routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
      <ToastContainer />
    </Provider>
  </StrictMode>,
)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  RouterProvider
} from "react-router-dom";
import './index.css';
import store from './redux/store.js';
import router from './Routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)

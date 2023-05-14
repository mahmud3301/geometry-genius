import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  // eslint-disable-next-line no-unused-vars
  createBrowserRouter,
  // eslint-disable-next-line no-unused-vars
  RouterProvider,
} from "react-router-dom";
import router from './Routes/routes';
import AuthProvider from './provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)

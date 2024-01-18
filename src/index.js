import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelSPage from "./pages/ModelSPage";
import ModelXPage from "./pages/ModelXPage";
import CybertruckPage from "./pages/CybertruckPage";
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <App>
          <HomePage />
        </App>
    ),
  },
  {
    path: '/model_s',
    element: (
        <App>
          <ModelSPage />
        </App>
    ),
  },
  {
    path: '/model_x',
    element: (
        <App>
          <ModelXPage />
        </App>
    ),
  },
  {
    path: '/cybertruck',
    element: (
        <App>
          <CybertruckPage />
        </App>
    ),
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);


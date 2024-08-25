import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MicrocontrollersDeveloperPage, MobileDeveloperPage, NotFoundPage, RepairPage, WebDeveloperPage } from './pages';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/site-app-ysl/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/site-app-ysl/service/repair',
    element: <RepairPage />,
  },
  {
    path: '/site-app-ysl/service/web-development',
    element: <WebDeveloperPage />,
  },
  {
    path: '/site-app-ysl/service/mobile-development',
    element: <MobileDeveloperPage />,
  },
  {
    path: '/site-app-ysl/service/microcontroller-development',
    element: <MicrocontrollersDeveloperPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

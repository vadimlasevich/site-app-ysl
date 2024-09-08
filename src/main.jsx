import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  MicrocontrollersDeveloperPage,
  MobileDeveloperPage,
  NotFoundPage,
  PowerSupplyPage,
  PrintingPage,
  RepairPage,
  WebDeveloperPage,
} from './pages';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/service/repair',
    element: <RepairPage />,
  },
  {
    path: '/service/web-development',
    element: <WebDeveloperPage />,
  },
  {
    path: '/service/mobile-development',
    element: <MobileDeveloperPage />,
  },
  {
    path: '/service/microcontroller-development',
    element: <MicrocontrollersDeveloperPage />,
  },
  {
    path: '/service/3D-printing',
    element: <PrintingPage />,
  },
  {
    path: '/service/power-supply',
    element: <PowerSupplyPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

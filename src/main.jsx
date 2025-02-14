import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PrivateAuth from './AuthProvider/PrivateAuth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrivateAuth>
      <RouterProvider router={router}></RouterProvider>
    </PrivateAuth>
  </StrictMode>,
)

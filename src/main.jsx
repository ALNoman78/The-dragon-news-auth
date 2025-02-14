import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import PrivateAuth from './AuthProvider/PrivateAuth';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PrivateAuth> */}
      <RouterProvider router={Router}></RouterProvider>
    {/* </PrivateAuth> */}
  </StrictMode>,
)

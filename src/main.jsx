import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <div>Hello from react router</div>
  },
  {
    path:'/about',
    element: <div>I am in the About Page</div>
  },
  {
    path:'contact',
    element: <div>I am in the Contact Page</div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)

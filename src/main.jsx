//Modules
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//Components
import Root from './Components/Root/Root'
import HomePage from './Components/HomePage/HomePage'
import ErrorPage from './Components/Error/errorPage'
import Collection from './Components/Collection/Collection'
import Theater from './Components/Theater/Theater'
import About from './Components/About/About'
import Faq from './Components/FAQ/Faq'
//Loaders

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'collection',
        element: <Collection />
      },
      {
        path: '/theater',
        element: <Theater />
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/faq',
        element: <Faq />,
      }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

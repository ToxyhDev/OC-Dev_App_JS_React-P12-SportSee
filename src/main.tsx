import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/Home/index.tsx'
import Profil from './pages/Profil/index.tsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/user/:id',
          element: <Profil />,
        },
      ],
    },
  ],
  {
    basename: '/',
  }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

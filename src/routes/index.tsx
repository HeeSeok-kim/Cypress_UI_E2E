import { createBrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import Layout from '../components/layout.tsx'
import HomePage from '../pages/HomePage.tsx'
import ModalTest from '../pages/ModalTest.tsx'
import WindowObjectTest from '../pages/WindowObjectTest.tsx'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'modal-test',
        element: <ModalTest />
      },
      {
        path: 'window-object-test',
        element: <WindowObjectTest />
      }
    ]
  }
])

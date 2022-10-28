import { ErrorChildPage } from '@/components/error/ErrorChildPage'
import { ErrorRootPage } from '@/components/error/ErrorRootPage'
import { Root } from '@/layout/root/Root'
import { Home } from '@/pages/home/Home'
import { Redirect } from '@/pages/redirect/Redirect'
import { Settings } from '@/pages/settings/Settings'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorRootPage />,
    children: [
      {
        errorElement: <ErrorChildPage />,
        children: [
          {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'settings',
            element: <Settings />,
          },
        ],
      },
    ],
  },
  {
    path: '/redirect',
    element: <Redirect />,
  },
])

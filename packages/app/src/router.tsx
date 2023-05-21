import { createBrowserRouter } from 'react-router-dom'

import HelloWorldPage from './pages/HelloWorldPage'

const router = createBrowserRouter([
  {
    path: '/hello',
    element: <HelloWorldPage />,
  },
])

export default router

import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'

import apolloClient from './apolloClient'
import router from './router'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  )
}

export default App

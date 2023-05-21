import { useQuery } from '@apollo/client'
import { Typography } from '@mui/material'

import { gql } from '../__generated__'

const HelloWorldPage = (): JSX.Element | null => {
  const { loading, data } = useQuery(HELLO_WORLD_PAGE_QUERY)

  return (
    <Typography>{loading ? 'Loading...' : data?.hello || 'No data'}</Typography>
  )
}

export default HelloWorldPage

const HELLO_WORLD_PAGE_QUERY = gql(`
  query HelloWorldPageQuery {
    hello
  }
`)

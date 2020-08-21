import React, { useEffect, useState } from 'react'

const App = (props) => {
  const [state, setState] = useState({
    message: null,
    loading: true,
    error: false,
  })

  useEffect(() => {
    const request = async () => {
      setState({ ...state, loading: true })

      // 1. retrieve data via graphql
      const response = await fetch('/graphql',{
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          variables: {
          },
          query: `
          query {
            message
          }`,
        })
      })

      // 2. alternatively retrieve data directly from the api
      // const response = await fetch('/api',{
      //   headers: {
      //     'content-type': 'application/json',
      //   }
      // })

      const { data } = await response.json()

      setState({ ...state, ...data, loading: false })
    }

    request()
  }, props)

  if (state.loading) {
    return null
  }

  return (<h1>{state.message}</h1>)
}

export default App

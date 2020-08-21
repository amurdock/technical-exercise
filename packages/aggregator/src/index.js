const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const fetch = require('node-fetch')

const typeDefs = gql`
  type Query {
    message: String!
  }
`

const resolvers = {
  Query: {
    message: async () => {
      const response = await fetch('http://localhost:3000/api')
      const json = await response.json()
      return json.data.message
    },
  },
}

const middleware = new ApolloServer({ typeDefs, resolvers }).getMiddleware()

const server = express()
  .use(middleware)
  .listen(process.env.PORT, () => {
    console.log('listening', server.address())
  })

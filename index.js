import { ApolloServer } from '@apollo/server'
import { startStandAloneServer } from '@apollo/server/standalone'

import { typeDefs } from './schema.js'

//server setup
const server = new ApolloServer({
    typeDefs,
})

const { url } = await startStandAloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000)
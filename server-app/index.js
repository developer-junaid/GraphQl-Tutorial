// get the required variables
const { ApolloServer, gql } = require("apollo-server")

// Data
const students = [
  {
    id: 1,
    name: "Junaid",
    email: "qjunad623@gmail.com",
    age: 21,
  },
  {
    id: 2,
    name: "Parvesh",
    email: "parveshjesswani224@gmail.com",
    age: 22,
  },
  {
    id: 3,
    name: "Hassan Raza",
    email: "sainbeloved@gmail.com",
    age: 24,
  },
]

// Define Resolvers
const resolvers = {
  Query: {
    students: () => {
      // Business Logic
      return students
    },
  },
}

// Define Schema (Types)
const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Query {
    students: [Student]
  }
`

// Create server
const server = new ApolloServer({ typeDefs, resolvers })

// Launch the server
server.listen().then(({ url }) => {
  console.log(`Server Ready at ${url} !!`)
})

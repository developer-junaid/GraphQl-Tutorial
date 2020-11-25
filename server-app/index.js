// get the required variables
const { ApolloServer, gql } = require("apollo-server")

// Data
let students = [
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
  // Query
  Query: {
    students: () => {
      // Business Logic
      return students
    },
  },

  // Mutation
  Mutation: {
    addStudent: (_, { input }) => {
      // Whenever new Student is added
      // Add it to the data
      students.push({
        name: input.name,
        age: input.age,
        email: input.email,
        id: students[students.length - 1]["id"] + 1,
      })

      return {
        name: input.name,
        age: input.age,
        email: input.email,
        id: students[students.length - 1]["id"] + 1,
      }
    },
  },
}

// Define Schema (Types)

// Queries and Mutations
const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  input StdInput {
    name: String
    email: String
    age: Int
  }

  type Query {
    students: [Student]
  }

  type Mutation {
    addStudent(input: StdInput): Student
  }
`
//

// Create server
const server = new ApolloServer({ typeDefs, resolvers })

// Launch the server
server.listen().then(({ url }) => {
  console.log(`Server Ready at ${url} !!`)
})

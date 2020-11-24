import { ApolloClient, InMemoryCache } from "@apollo/client"

// Configure the client
export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
})

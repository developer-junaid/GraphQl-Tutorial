import "./App.css"
import { client } from "./../config/gql_config"
import { ApolloProvider } from "@apollo/client"
import Students from "./Students"

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        <Students />
      </div>
    </ApolloProvider>
  )
}

export default App

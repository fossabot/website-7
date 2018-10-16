import { Router } from '@reach/router'
import ApolloClient from 'apollo-boost'
import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import HomePage from '../HomePage/HomePage'
import WipPage from '../WipPage/WipPage'

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://api.paderbornjs.org'
      : 'http://localhost:4000',
})

class App extends Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <HomePage path="/" />
          <WipPage path="/wip" />
        </Router>
      </ApolloProvider>
    )
  }
}

export default App

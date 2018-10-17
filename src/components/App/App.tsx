import { Router } from '@reach/router'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { onError } from 'apollo-link-error'
import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Helmet } from 'react-helmet'
import HomePage from '../HomePage/HomePage'
import WipPage from '../WipPage/WipPage'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      }
      if (networkError) {
        console.log(`[Network error]: ${networkError}`)
      }
    }),
    new BatchHttpLink({
      credentials: 'same-origin',
      uri:
        process.env.NODE_ENV === 'production'
          ? 'https://api.paderbornjs.org'
          : 'http://localhost:4000',
    }),
  ]),
})

class App extends Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <Helmet defaultTitle="Paderborn.JS" titleTemplate="%s – Paderborn.JS" />
        <Router>
          <HomePage path="/" />
          <WipPage path="/wip" />
        </Router>
      </ApolloProvider>
    )
  }
}

export default App

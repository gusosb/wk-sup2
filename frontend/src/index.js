import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'


import { setContext } from '@apollo/client/link/context'

import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('wkflextoken')
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    }
  }
})


const httpLink = new HttpLink({ uri: 'https://wkflex.kanindev.se/' })
//const httpLink = new HttpLink({ uri: 'http://localhost:3002' })

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  link: authLink.concat(httpLink)
})

ReactDOM.render(
    <ApolloProvider client={client}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ApolloProvider>,
  document.getElementById('root')
)
import React from 'react';
import Application from './index.js'

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/relay/v1/cjdzsmim2332t0175wp40g39p' }),
});

export default class App extends React.Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <Application />
      </ApolloProvider>
    )
  }
}

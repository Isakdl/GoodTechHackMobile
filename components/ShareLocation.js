import React from 'react';
import {Button} from 'react-native';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// A mutation is made available on a callback called `mutate`
// Other props of the wrapping component are passed through.
function ShareLocation({ mutate, person }) {
  return (
    <Button
      onPress={() => mutate({ variables: { ...person}})}
      title="Share position"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  )
}

// You can also use `graphql` for GraphQL mutations
export default graphql(gql`
  mutation createPerson($longitude: Float, $latitude: Float) {
    createPerson(person: $person){
      longitude
      latitude
    }
  }
`)(ShareLocation);

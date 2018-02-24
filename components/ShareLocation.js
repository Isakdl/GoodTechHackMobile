import React from 'react';
import ActionButton from 'react-native-action-button';
import {View} from 'react-native'
import { Ionicons} from '@expo/vector-icons';


import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// A mutation is made available on a callback called `mutate`
// Other props of the wrapping component are passed through.
function ShareLocation({ mutate, person }) {

  return (

      <ActionButton
        title="Share position"
        buttonColor="#00C853"
        accessibilityLabel="Learn more about this purple button"
      >
        <ActionButton.Item
          buttonColor={"#FFFFFF"}
          title='Send position'
            onPress={() => mutate({ variables: { ...person}})}>
          <Ionicons name={"md-pin"} color={"#00C853"} size={24}/>
        </ActionButton.Item>
      </ActionButton>
      )
}

// You can also use `graphql` for GraphQL mutations
export default graphql(gql`
  mutation createPerson($longitude: Float, $latitude: Float) {
    createPerson(longitude: $longitude,latitude: $latitude) {
      longitude
      latitude
    }
  }
`)(ShareLocation);

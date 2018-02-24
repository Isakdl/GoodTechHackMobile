import React from 'react';
import {View} from 'react-native'
import {Button} from 'react-native';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import FAB from 'react-native-fab'
import { Ionicons ,MaterialIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';

// A mutation is made available on a callback called `mutate`
// Other props of the wrapping component are passed through.
function ShareLocation({ mutate, person,onClick }) {

  let focused = true

  return (
    <View>
      <FAB
        buttonColor={Colors.tabIconSelected}
        iconTextColor="#FFFFFF"
        onClickAction={() => {

          onClick()
          mutate({variables: {id: "cje10huf7m2dn0157f4n48fr1"}})}
        }
        visible={true}
        iconTextComponent={<Ionicons
          name="md-pin"
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />} />

      </View>
  )
}

// You can also use `graphql` for GraphQL mutations
export default graphql(gql`
  mutation deletePerson($id: ID!) {
    deletePerson(id: $id){
      id
      longitude
      latitude
    }
  }
`)(ShareLocation);

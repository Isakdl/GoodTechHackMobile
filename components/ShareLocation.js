import React from 'react';
import {View} from 'react-native'
import {Button} from 'react-native';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import FAB from 'react-native-fab'
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
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

          mutate({variables: {...person}})}
        }
        visible={true}
        iconTextComponent={<MaterialIcons
          name="location-off"
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />} />

      </View>
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

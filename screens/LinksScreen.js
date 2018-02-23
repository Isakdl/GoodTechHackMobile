import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { MapView } from 'expo';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header:null,
  };

  render() {
    if(this.props.data.loading){
      return <View><Text>Loading</Text></View>
    } else {
      console.error(this.props.data)
      return <View><Text>Has loaded data</Text></View>
    }
    return (

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});


// export default graphql(gql`
//   query hello {
//     message
//   }
// `)(LinksScreen);

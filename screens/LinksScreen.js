import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { MapView } from 'expo';
import {Marker} from 'react-native-maps'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LinksScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };

    placeMarker = (markers) => {
      return (
        markers.map(marker => {
          return(
          <Marker
            key={marker.id}
            coordinate ={{latitude:marker.latitude, longitude: marker.longitude}} />)
        })
      )

    }

    render() {
        return (
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
              }}
            >
              {this.placeMarker([{latitude: 37.78825,
              longitude: -122.4324,id:1}])}
            </MapView>

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


export default graphql(gql`
  query {
    allPersons {
      id
    }
  }
`)(LinksScreen);

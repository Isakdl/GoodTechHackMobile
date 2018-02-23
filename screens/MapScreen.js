import React from 'react';
import { View, Text, ScrollView, StyleSheet, Platform, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { MapView } from 'expo';
import { Marker } from 'react-native-maps'
import { Constants, Location, Permissions } from 'expo';


import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const springs = [{
  id:'1212',
  title: 'Alnö (G:a Kyrkan)',
  latitude: 62.449341,
  longitude: 17.405505,
}, {
  id:'231231212',
  title: 'Kanten',
  latitude: 62.408241,
  longitude: 17.167216,
}, {
  id:'213123123',
  title: 'Wifstavarv',
  latitude: 62.481387,
  longitude: 17.328472,
}]

import ShareLocation from '../components/ShareLocation'

class MapScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };

    state = {
      location: null,
      errorMessage: null,
    };

    componentWillMount() {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        this.setState({
          errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        });
      } else {
        this._getLocationAsync();
      }
    }

    _getLocationAsync = async() => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }

      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      this.setState({ location });
    };

    placeMarker = (markers) => {
      return (
        markers.map(marker => {
          return (
            <Marker
              key={marker.id}
              coordinate ={{latitude:marker.latitude, longitude: marker.longitude}} />)
        })
      )

    }

    placeWater = (springs) => {
      return (
        springs.map(marker => {
          return (
            <Marker
              image ={require('../assets/images/waterdrop.png')}
              key = { marker.id } coordinate = { { latitude: marker.latitude, longitude: marker.longitude } }
            />)
          }))

      }

      sharePosition() {

      }

      render() {
        let location = this.state.location

        if (!location) {
          return <View></View>
        }

        return (
          <View style={styles.container}>
            <ShareLocation person={{
              id: "asdf",
              longitude: location.coords.longitude,
            latitude: location.coords.latitude}}
            />
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              {this.placeMarker([{latitude: location.coords.latitude,
              longitude: location.coords.longitude,id:1}])}
          {this.placeWater(springs)}
          </MapView>
        </View>
        )

      }
    }


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    });



    export default graphql(gql `
  query {
    allPersons {
      id
    }
  }

`)(MapScreen);

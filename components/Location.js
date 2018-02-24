import React from 'react';
import DeleteLocation from './DeleteLocation'
import ShareLocation from './ShareLocation'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
export default class Location extends React.Component {
  state = {
    sharing: false,
  };

  onPress = () => {
    this.setState({ sharing: !this.state.sharing })
  }
  render() {
    if (this.state.sharing) {
      return (
        <ShareLocation
          onClick = {this.onPress}
          person= {this.props.person}/>
      )
    } else {
      return (
        <DeleteLocation
          onClick = {this.onPress}/>
      )
    }
  }
}

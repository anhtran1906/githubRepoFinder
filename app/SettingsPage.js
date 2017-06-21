/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';


export default class SettingsPage extends Component {

  // getPostsFromApiAsync = () => {
  //   return fetch(this.props.route)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log(responseJson);
  //       this.setState({
  //         dataSource: this.state.dataSource.cloneWithRows(responseJson.results)
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }
  //
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

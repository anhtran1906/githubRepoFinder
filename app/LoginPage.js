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
  Button,
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
const infoRequest = new GraphRequest(
  '/me',
  null,
  this._responseInfoCallback,
);

export default class LoginPage extends Component {
  //Create response callback.
  _responseInfoCallback = (error: ?Object, result: ?Object) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      const name = result.name;
      this.props.navigation.navigate('Home', {name});
    }
  }


  render() {
    const infoRequest = new GraphRequest(
      '/me',
      null,
      this._responseInfoCallback,
    );
    return (
      <View>
       <LoginButton
         publishPermissions={["publish_actions"]}
         onLoginFinished={
           (error, result) => {
             if (error) {
               alert("login has error: " + result.error);
             } else if (result.isCancelled) {
               alert("login is cancelled.");
             } else {
               new GraphRequestManager().addRequest(infoRequest).start();
              //  AccessToken.getCurrentAccessToken().then(
              //    (data) => {
              //      alert(data.accessToken.toString())
              //    }
              //  )
             }
           }
         }
         onLogoutFinished={() => alert("logout.")}/>
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

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
  Image,
  TextInput,
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      refreshing: false,
    };
  }
  componentDidMount() {
    this.getPostsFromApiAsync('');
  }
  getPostsFromApiAsync = (kw) => {
    return fetch(`https://api.github.com/search/repositories?q=topic:${kw}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson.items)
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleChangeText = (text) => {
    if (!text) {
      this.getPostsFromApiAsync('');
    }
    else {
      this.getPostsFromApiAsync(text);
    }
  }

  renderRow(rowData) {
    return (
      <View style={{flexDirection:'row'}}>
        <Image
          style={{width:100, height:100}}
          source={{uri: rowData.owner.avatar_url}}
        />
        <Text>
          {rowData.name}
        </Text>
      </View >
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi {this.props.navigation.state.params.name}</Text>
        <View style={{height:50, width:200, marginTop:20, borderColor:'black', borderWidth:1}}>
          <TextInput
            style={{flex:1, height: 50}}
            placeholder="Search..."
            placeholderTextColor="black"
            returnKeyType="search"
            onSubmitEditing={() => alert("Search")}
            onChangeText={this.handleChangeText}
          />
        </View>
          <ListView
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            enableEmptySections
            pageSize={2}
            renderRow={(rowData) => this.renderRow(rowData)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 8,
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

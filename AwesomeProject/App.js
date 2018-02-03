/**[]
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row', marginBottom: 40}}>
              <Text style={{fontSize: 24}}>TD Bank Payment System</Text>
            </View>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 180}}
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.username}
            />
            <TextInput
              secureTextEntry = {true}
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 180}}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

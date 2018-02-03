import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      apiKey: '',
      userFullName: '',
      accounts: []
    }
  }

  loginOnClick = () => {
    this.setState({isLoading: true});
    fetch(`https://api-wufthacks.xlabs.one:8243/userSignin/V1.0.0/signin`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer 8b60815e-85d1-3a21-9154-6c384535a6f2',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           'username': this.state.username,
           'password': this.state.password
        })
      })
    .then((response) => {
      if(response.status == 200){
        return response.json();
      }else{
        alert("Login Failed");
        this.setState({isLoading: false});
      }
    }).then((responseData) => {
      this.setState({apiKey: responseData["X-Api-Key"]});
      fetch(`https://api-wufthacks.xlabs.one:8243/td/userprofile/V1.0.0/profile`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer 8b60815e-85d1-3a21-9154-6c384535a6f2',
            'Content-Type': 'application/json',
            'X-Api-Key': this.state.apiKey
          }
        }).then((response) => {
          return response.json();
        }).then((responseData) => {
          this.setState({userFullName: responseData["person"]["forename"]});
          fetch(`https://api-wufthacks.xlabs.one:8243/td/account/V1.0.0/account/all?page=1&size=5`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer 8b60815e-85d1-3a21-9154-6c384535a6f2',
              'Content-Type': 'application/json',
              'X-Api-Key': this.state.apiKey
            }
          }).then((response) => {
            return response.json();
          }).then((responseData) => {
            this.setState({accounts: responseData});
          })
        })
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <Text style={{fontSize: 24, color: '#5dd55d'}}>TD Bank Payment System</Text>
            </View>
            <View>
              <Text style={{textAlign: 'center'}}>
                Username{'\n'}
              </Text>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 180, borderRadius: 10}}
                underlineColorAndroid = 'rgba(0,0,0,0)'
                onChangeText={(text) => this.setState({username: text})}
                value={this.state.username}
              />
              <Text style={{textAlign: 'center'}}>
                {'\n'}Password{'\n'}
              </Text>
              <TextInput
                secureTextEntry = {true}
                underlineColorAndroid = 'rgba(0,0,0,0)'
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 180, marginBottom: 20, borderRadius: 10}}
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
              />
              <Button
                onPress={this.loginOnClick}
                color="#5dd55d"
                title='Login'
                disabled={this.state.isLoading}
              />
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

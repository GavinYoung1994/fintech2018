import React, { Component } from 'react';
import Login from './Login';
import Balance from './Balance'
import Select from './Select';
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
      loggedIn: false,
      currentPage: '',
      username: '',
      accounts: []
    }
  }

  changeLoginStatus = () => {
    this.setState({loggedIn: true});
  }

  changeCurrentPage = (page) => {
    this.setState({currentPage: page});
  }

  updateAccounts = (accounts) => {
    this.setState({accounts: accounts});
  }

  updateUsername = (username) => {
    this.setState({username: username});
  }

  render() {
    return (
      <View style={styles.container}>
        {
          !this.state.loggedIn && 
          <Login 
            changeLoginStatus = {this.changeLoginStatus}
            changeCurrentPage = {this.changeCurrentPage}
            updateUsername = {this.updateUsername}
            updateAccounts = {this.updateAccounts}
          />
        }
        {
          this.state.loggedIn && this.state.currentPage == 'balance' &&
          <Balance
            changeCurrentPage = {this.changeCurrentPage}
            username = {this.state.username}
            accounts = {this.state.accounts}
          />
        }
        {
          this.state.loggedIn && this.state.currentPage == 'select' &&
          <Select/>
        }
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

import React, { Component } from 'react';
import Login from './Login';
import Balance from './Balance'
import Select from './Select';
import NewContact from './NewContact';
import IndContact from './IndContact';
import Payment from './Payment';
import CompContact from './Compcontact'
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
      accounts: [],
      fromAccountId: 0,
      fromAccountName: '',
      toAccountId: 0,
      toAccountName: ''
    }
  }

  changeLoginStatus = () => {
    this.setState({loggedIn: true});
  }

  changeCurrentPage = (page) => {
    this.setState({currentPage: page});
  }

  updateAccounts = (accounts) => {
    this.setState({accounts: this.state.accounts.concat(accounts)});
  }

  updateUsername = (username) => {
    this.setState({username: username});
  }

  selectFromAccountId = (id) => {
    this.setState({fromAccountId: id});
  }

  selectFromAccountName = (name) => {
    this.setState({fromAccountName: name});
  }

  selectToAccountId = (id) => {
    this.setState({toAccountId: id});
  }

  selectToAccountName = (name) => {
    this.setState({toAccountName: name});
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
            selectFromAccountId = {this.selectFromAccountId}
            selectFromAccountName = {this.selectFromAccountName}
            username = {this.state.username}
            accounts = {this.state.accounts}
          />
        }
        {
          this.state.loggedIn && this.state.currentPage == 'select' &&
          <Select
            changeCurrentPage = {this.changeCurrentPage}
            selectToAccountName = {this.selectToAccountName}
          />
        }
        {
          this.state.loggedIn && this.state.currentPage == 'newContact' &&
          <NewContact
            changeCurrentPage = {this.changeCurrentPage}
          />
        }
        {
          this.state.loggedIn && this.state.currentPage == 'individual' &&
          <IndContact
            changeCurrentPage = {this.changeCurrentPage}
            selectToAccountId = {this.selectToAccountId}
            selectToAccountName = {this.selectToAccountName}
          />
        }
        {
          this.state.loggedIn && this.state.currentPage == 'company' &&
          <CompContact
            changeCurrentPage = {this.changeCurrentPage}
          />
        }
        {
          this.state.loggedIn && this.state.currentPage == 'payment' &&
          <Payment
            changeCurrentPage = {this.changeCurrentPage}
            fromAccountName = {this.state.fromAccountName}
            toAccountName = {this.state.toAccountName}
          />
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

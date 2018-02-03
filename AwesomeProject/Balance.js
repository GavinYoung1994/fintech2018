import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native';

export default class Balance extends React.Component {
  static propTypes = {
    changeCurrentPage: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    accounts: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
  	  	<View>
          <Text style={{fontSize: 24, color: '#5dd55d'}}>Welcome, {this.props.username}</Text>
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
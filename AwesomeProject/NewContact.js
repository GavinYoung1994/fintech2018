import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList
} from 'react-native';

export default class NewContact extends React.Component {
  static propTypes = {
    changeCurrentPage: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  selectContactType = (type) => {
    this.props.changeCurrentPage(type);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 380, backgroundColor: '#33cc33', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.largeButton}>Public</Text></View>
        <View style={{width: 380, backgroundColor: '#5dd55d', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.largeButton}>Private</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  largeButton: {
    fontSize: 48,
    color: '#fff'
  }
});
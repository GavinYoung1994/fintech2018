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
  TouchableHighlight,
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
        <TouchableHighlight
         style={styles.button_1}
         onPress={() => {this.selectContactType('company')}}
        >
         <Text style={styles.largeButton}> Company </Text>
        </TouchableHighlight>
        <TouchableHighlight
         style={styles.button_2}
         onPress={() => {this.selectContactType('individual')}}
        >
         <Text  style={styles.largeButton}> Individual </Text>
        </TouchableHighlight>
      
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
    justifyContent: 'center',
    
  },
  button_1: {
    alignItems: 'center',
    backgroundColor: '#33cc33',
    padding: 148
  },
   button_2: {
    alignItems: 'center',
    backgroundColor: '#5dd55d',
    padding: 148
  },
  largeButton: {
    color: '#fff',
    fontSize: 26
  }


});
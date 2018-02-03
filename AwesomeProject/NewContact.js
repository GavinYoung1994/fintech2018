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
         onPress={this.selectContactType}
        >
         <Text style={styles.largeButton}> Public{' '} </Text>
        </TouchableHighlight>
        <TouchableHighlight
         style={styles.button_2}
         onPress={this.selectContactType}
        >
         <Text  style={styles.largeButton}> Private </Text>
        </TouchableHighlight>
      
      </View>
        // <View style={{width: 420, backgroundColor: '#33cc33', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        // <Text style={styles.largeButton}>Public</Text></View>
        // <View style={{width: 420, backgroundColor: '#5dd55d', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        // <Text style={styles.largeButton}>Private</Text>
        //</View>
      //</View>
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
    marginBottom: 30,
    borderRadius: 30,
    padding: 100
  },
   button_2: {
    alignItems: 'center',
    backgroundColor: '#5dd55d',
    borderRadius: 30,
    marginBottom: 50,
    padding: 100
  },
  largeButton: {
    color: '#fff',
    fontSize: 48
  }


});
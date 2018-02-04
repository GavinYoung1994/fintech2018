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

export default class Payment extends React.Component {
  static propTypes = {
    changeCurrentPage: PropTypes.func.isRequired,
    fromAccountName: PropTypes.string.isRequired,
    toAccountName: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      note: ''
    }
  }

  cancel = () => {
    this.props.changeCurrentPage('select');
  }

  pay = () => {
    alert("Payment made!");
    this.props.changeCurrentPage('select');
  }

  render() {
    return (
      <View style={styles.container}>
          	<View>
            <View><Text style={{fontSize: 24, color: '#5dd55d'}}>Make Payment</Text></View>
          </View>
          <View>
              <Text style={{textAlign: 'center'}}>
                FROM: {this.props.fromAccountName + '\n'}
              </Text>
              </View>
              <View>
              <Text style={{textAlign: 'center'}}>
                {'\n TO: ' + this.props.toAccountName + '\n'}
              </Text>
              </View>
              <View>
              <Text style={{textAlign: 'center'}}>
                {'\n'}Amount{'\n'}
              </Text>
              <TextInput
                underlineColorAndroid = 'rgba(0,0,0,0)'
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 180, marginBottom: 20, borderRadius: 10}}
                onChangeText={(text) => this.setState({amount: text})}
                value={this.state.amount}
              />
              </View>
              <View>
              <Text style={{textAlign: 'center'}}>
                {'\n'}Note{'\n'}
              </Text>
              <TextInput
                underlineColorAndroid = 'rgba(0,0,0,0)'
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 180, marginBottom: 20, borderRadius: 10}}
                onChangeText={(text) => this.setState({note: text})}
                value={this.state.note}
              />
              </View>
              <View style={{marginBottom: 20}}><Button
              onPress={this.pay}
              color="#5dd55d"
              title='Pay'
            /></View>
            <View>
              <Button
                onPress={this.cancel}
                color="red"
                title='cancel'
              />
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});
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

export default class IndContact extends React.Component {
  static propTypes = {
    changeCurrentPage: PropTypes.func.isRequired,
    selectToAccountId: PropTypes.func.isRequired,
    selectToAccountName: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
    	firstname: '',
    	lastname: '',
    	email: '',
    	note: '',
    	accountNum: ''
    }
  }

  cancel = () => {
  	this.props.changeCurrentPage('select');
  }

  payment = () => {
  	this.props.selectToAccountName(this.state.firstname + ' ' + this.state.lastname);
  	this.props.changeCurrentPage('balance');
  }

  render() {
    return (
      <View style={styles.container}>
          	<View>
	          <View><Text style={{fontSize: 24, color: '#5dd55d'}}>Add Contact</Text></View>
        	</View>
        	<View>
              <Text style={{textAlign: 'center'}}>
                First Name{'\n'}
              </Text>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 180, borderRadius: 10}}
                underlineColorAndroid = 'rgba(0,0,0,0)'
                onChangeText={(text) => this.setState({firstname: text})}
                value={this.state.firstname}
              />
              </View>
              <View>
              <Text style={{textAlign: 'center'}}>
                {'\n'}Last Name{'\n'}
              </Text>
              <TextInput
                underlineColorAndroid = 'rgba(0,0,0,0)'
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 180, marginBottom: 10, borderRadius: 10}}
                onChangeText={(text) => this.setState({lastname: text})}
                value={this.state.lastname}
              />
              </View>
              <View>
              <Text style={{textAlign: 'center'}}>
                {'\n'}Email{'\n'}
              </Text>
              <TextInput
                underlineColorAndroid = 'rgba(0,0,0,0)'
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 180, marginBottom: 10, borderRadius: 10}}
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}
              />
              </View>
              <View>
              <Text style={{textAlign: 'center'}}>
                {'\n'}Account Number{'\n'}
              </Text>
              <TextInput
                underlineColorAndroid = 'rgba(0,0,0,0)'
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 180, marginBottom: 10, borderRadius: 10}}
                onChangeText={(text) => this.setState({accountNum: text})}
                value={this.state.accountNum}
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
	            onPress={this.payment}
	            color="#5dd55d"
	            title='Add Contact & Pay'
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
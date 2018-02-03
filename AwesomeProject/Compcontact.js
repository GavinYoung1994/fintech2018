import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements'
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
    changeCurrentPage: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
    	companyname: '',
    	accountNum: ''
    }
  }

  cancel = () => {
  	this.props.changeCurrentPage('select');
  }

  addContact = () => {
  	this.props.changeCurrentPage('confirm');
  }

  render() {
    return (
      <View style={styles.container}>
            <View style = {{width:410,marginTop: 0}}>
            <SearchBar
              lightTheme
              round
              onChangeText={()=>{}}
              placeholder='Type Here...' />
              <Text style={{fontSize: 24, color: '#5dd55d',textAlign: 'center'}}>Add Company</Text>
            </View>
            <View>
              <Text style={{textAlign: 'center'}}>
                Company Name{'\n'}
              </Text>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 180, borderRadius: 10}}
                underlineColorAndroid = 'rgba(0,0,0,0)'
                onChangeText={(text) => this.setState({companyname: text})}
                value={this.state.companyname}/>
              </View>
              <View>
              <Text style={{textAlign: 'center'}}>
                {'\n'}Account Number{'\n'}
              </Text>
              <TextInput
                secureTextEntry = {true}
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
                secureTextEntry = {true}
                underlineColorAndroid = 'rgba(0,0,0,0)'
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 180, marginBottom: 20, borderRadius: 10}}
                onChangeText={(text) => this.setState({note: text})}
                value={this.state.note}
              />
              </View>
              <View style={{marginBottom: 20}}><Button
	            onPress={this.addContact}
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
    alignItems: 'center',
    position: 'absolute', 
    top: 0
  }
});
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

export default class IndContact extends React.Component {
  static propTypes = {
    changeCurrentPage: PropTypes.func.isRequired,
    selectToAccountName: PropTypes.func.isRequired
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
    this.props.selectToAccountName(this.state.companyname);
  	this.props.changeCurrentPage('balance');
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
              <Text style={{fontSize: 24, color: '#5dd55d',textAlign: 'center'}}>Shortcuts</Text>
            </View>
            <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between'}}>
              <TouchableOpacity activeOpacity = { .5 } onPress={ () => {this.props.selectToAccountName('TD Bank');this.props.changeCurrentPage('balance');} }>
              <Image
              style={{width: 50, height: 50, marginRight: 15}} 
              source={require('./tdbankicon.png')} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity = { .5 } onPress={ () => {this.props.selectToAccountName('ATT');this.props.changeCurrentPage('balance');} }>
              <Image
              style={{width: 50, height: 50, marginRight: 15}} 
              source={require('./ATTicon.jpg')} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity = { .5 } onPress={ () => {this.props.selectToAccountName('Amazon');this.props.changeCurrentPage('balance');} }>
              <Image
              style={{width: 50, height: 50, marginRight: 15}} 
              source={require('./amazonicon.png')} />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between', marginTop: 20, marginBottom: 20}}>
              <TouchableOpacity activeOpacity = { .5 } onPress={ () => {this.props.selectToAccountName('Netflix');this.props.changeCurrentPage('balance');} }>
              <Image
              style={{width: 50, height: 50, marginRight: 15}} 
              source={require('./Netflixicon.png')} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity = { .5 } onPress={ () => {this.props.selectToAccountName('Costco');this.props.changeCurrentPage('balance');} }>
              <Image
              style={{width: 50, height: 50, marginRight: 15}} 
              source={require('./costcoicon.png')} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity = { .5 } onPress={ () => {this.props.selectToAccountName('Hulu');this.props.changeCurrentPage('balance');} }>
              <Image
              style={{width: 50, height: 50, marginRight: 15}} 
              source={require('./Huluicon.png')} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{fontSize: 24, color: '#5dd55d',textAlign: 'center'}}>Add Company</Text>
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
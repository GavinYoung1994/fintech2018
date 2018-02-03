import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native';

export default class Select extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };

  renderFavHeader = () => {
    return <Text style={{fontSize: 24, color: '#5dd55d', textAlign: 'center'}}>Favorites</Text>;
  };

  addPayTo = () => {

  }

  render() {
    return (
      <View style={styles.container}>
  	  	<View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            style={{width: 40, height: 40}} 
            source={require('./user.png')} />
          <Text style={{fontSize: 24, color: '#5dd55d'}}>Pay To</Text>
          <Button
            onPress={this.addPayTo}
            color="#5dd55d"
            title='Add Contact'
          />
        </View>
        <View>

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
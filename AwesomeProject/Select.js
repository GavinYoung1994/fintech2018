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

export default class Select extends React.Component {
  static propTypes = {
    changeCurrentPage: PropTypes.func.isRequired,
    selectToAccountName: PropTypes.func.isRequired
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

  renderContactsHeader = () => {
    return <Text style={{fontSize: 24, color: '#5dd55d', textAlign: 'center'}}>Contacts</Text>;
  };

  addPayTo = () => {
    this.props.changeCurrentPage('newContact');
  }

  render() {
    return (
      <View style={styles.container}>
  	  	<View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Image
              style={{width: 40, height: 40}} 
              source={require('./user.png')} />
            </View>
          <View><Text style={{fontSize: 24, color: '#5dd55d'}}>Pay To</Text></View>
          <View><Button
            onPress={this.addPayTo}
            color="#5dd55d"
            title='Add Contact'
          /></View>
        </View>
        <View>
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, width:400 }}>
              <FlatList
                data={[
                  {name:'Ben', note:'A genius'},
                  {name:'Benjamin', note:'A genius with a longer name'}
                  ]}
                renderItem={({ item }) => (
                  <ListItem
                    roundAvatar
                    title={item['name']}
                    subtitle={item['note']}
                    containerStyle={{ borderBottomWidth: 0 }}
                    onPress={()=>{this.props.selectToAccountName(item['name']); this.props.changeCurrentPage('payment')}}
                  />
                )}
                keyExtractor={item => item['name']}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderFavHeader}
                onEndReachedThreshold={3}
              />
            </List>
        </View>
        <View>
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, width:400 }}>
              <FlatList
                data={[
                  {name:'Alex', note:'Not sure a boy or a girl'},
                  {name:'BOA', note:'Bank of America'},
                  {name:'Landlord', note:'He got all my money'},
                  {name:'PECO', note:'Money for power'},
                  {name:'Starbucks', note:"Don't talk to me until I have my coffee"},
                  {name:'Zoo', note:'I love animals'}
                  ]}
                renderItem={({ item }) => (
                  <ListItem
                    roundAvatar
                    title={item['name']}
                    subtitle={item['note']}
                    containerStyle={{ borderBottomWidth: 0 }}
                    onPress={()=>{this.props.selectToAccountName(item['name']); this.props.changeCurrentPage('payment')}}
                  />
                )}
                keyExtractor={item => item['name']}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderContactsHeader}
                onEndReachedThreshold={7}
              />
            </List>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});
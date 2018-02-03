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

export default class Balance extends React.Component {
  static propTypes = {
    changeCurrentPage: PropTypes.func.isRequired,
    selectFromAccountId: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    accounts: PropTypes.array.isRequired
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

  renderHeader = () => {
    return <Text style={{fontSize: 24, color: '#5dd55d', textAlign: 'center'}}>Pay From</Text>;
  };

  selectFromAccountId = (id) => {
    this.props.selectFromAccountId(id);
    this.props.changeCurrentPage('select');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, width:400 }}>
              <FlatList
                data={this.props.accounts}
                renderItem={({ item }) => (
                  <ListItem
                    roundAvatar
                    title={item['accountType']['accountType']}
                    subtitle={'Balance: '+ item['balance']}
                    containerStyle={{ borderBottomWidth: 0 }}
                    onPress={()=>{this.selectFromAccountId(item['accountId'])}}
                  />
                )}
                keyExtractor={item => item['accountId']}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
                onEndReachedThreshold={50}
              />
            </List>
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
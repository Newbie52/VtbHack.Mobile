import React from "react";
import {View, Text} from "react-native";

export class SplitScreen extends React.Component {
  render() {
    const usersSelected = this.props.navigation.getParam('users', null);
    const billItems = this.props.navigation.getParam('billItems', null);
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Users selected: {usersSelected ? usersSelected.length : 0}</Text>
        <Text>Bill items: {billItems ? billItems.length : 0}</Text>
      </View>
    )
  }
}

import React from "react";
import {ListView, Text, View, CheckBox, Image, TouchableOpacity} from 'react-native';


export class SplitScreen extends React.Component {

  // usersSelected = this.props.navigation.getParam('users', null);
  // billItems = this.props.navigation.getParam('billItems', null);

  constructor(props) {
    super(props);

    const usersSelected = this.props.navigation.getParam('users', null);
    const billItems = this.props.navigation.getParam('billItems', null);

    const products = billItems.map( (item, index) => {return {id: index, name: item.name, price: item.price, users: []}});
    const users = usersSelected.map(user => { return {name: user.name, products: []}});

    const partDs = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const itemsDs = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      selectedUsers: usersSelected,
      products: products,
      users: users,
      peopleDataSource: partDs.cloneWithRows(usersSelected),
      itemDataSource: itemsDs.cloneWithRows(billItems),
      selectedUser: 0,
      checkboxArray: this.createCheckBoxArray(usersSelected, billItems),
      someValue: false
    }
  };

  createCheckBoxArray(users, bills) {
    const arr = [];
    for (let i = 0; i < users.length; i++) {
      arr.push(Array(bills.length).fill(false));
    }
    return arr;
  }

  addProduct = (index) => {
    const users = this.state.users;
    const products = this.state.products;

    users[this.state.selectedUser].products.push(products.filter(item => item.id === index));
    this.setState({
      users: users,
      products: products.filter(item => item.id !== index)
    })
  };

  render() {
    return (
      <View style={{ paddingTop: 100, flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 2 }}>
          { this.state.selectedUsers.map( user => <Text>{user.name}</Text>) }
        </View>
        <View style={{ flex: 4 }}>
          { this.state.products.map((product) =>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}
                              onPress={() => this.addProduct(product.id)}>
              <Text>{product.name}</Text>
              <Text>{product.price}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
}

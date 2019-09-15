import React from "react";
import {ListView, Text, View, CheckBox, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { uuidv4 } from '../api/code-scanner'

export class SplitScreen extends React.Component {

  // usersSelected = this.props.navigation.getParam('users', null);
  // billItems = this.props.navigation.getParam('billItems', null);

  constructor(props) {
    super(props);

    const usersSelected = this.props.navigation.getParam('users', null);
    const billItems = this.props.navigation.getParam('billItems', null);

    const products = billItems.map((item, index) => { return { id: index, name: item.name, price: item.price, users: [] } });
    const users = usersSelected.map(user => { return { name: user.name, products: [], sum: 0 } });

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

    const currentproduct = products.filter(item => item.id === index)[0];

    users[this.state.selectedUser].products.push(products.filter(item => item.id === index));
    users[this.state.selectedUser].sum += currentproduct.price;

    console.log(users[this.state.selectedUser].sum);
    console.log(currentproduct.price);

    this.setState({
      users: users,
      products: products.filter(item => item.id !== index)
    })
  };

  submitEvent() {
    try {
      var events = await AsyncStorage.getItem("Events");
      if (events == null) {
        events = "[]";
      }
      var eventsArray = JSON.parse(events);
      eventsArray.push(
        {
          id: uuidv4(),
          name: 'Test name',
          address: 'тест адрес',
          sum: 123,
          isDivided: false,
          Invoices=[
            {payerName:"",
          amount:0, invoiceUuid:"uidhere"}
          ]
        });
      await AsyncStorage.setItem("Events", JSON.stringify(eventsArray));
      //добавить навигацию к списку ивентов
    } catch (error) {
      // Error saving data
    }
  }


  render() {
    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        <View style={{ paddingTop: 100, flex: 0.9, flexDirection: 'row' }}>
          <View style={{ flex: 2, paddingHorizontal: 15 }}>
            { this.state.users.map( (user, index) =>
            <TouchableOpacity onPress={() => this.setState({selectedUser: index})}
                              style={this.getUserStyle(index)}>
              <Text>{user.name}</Text>
              <Text style={{fontWeight: 'bold'}}>Сумма: {user.sum}р</Text>
            </TouchableOpacity>) }
          </View>
          <View style={{ flex: 4, paddingHorizontal: 15 }}>
            { this.state.products.map((product) =>
              <TouchableOpacity style={{ height: 30, flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, borderBottomWidth: 2, borderColor: 'blue'}}
                                onPress={() => this.addProduct(product.id)}>
                <Text>{product.name}</Text>
                <Text>{product.price}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.cancelAggreeFooter}>
          <TouchableOpacity style={styles.buttonOk} onPress={() => {  }}>
                <Text style={{ 
                              alignSelf: 'center',
                              color: '#16ACB8',
                              fontSize: 18,
                              fontWeight: 'normal',
                              paddingTop:7
                            }}>Отправить запрос</Text>
          </TouchableOpacity>
         </View>
      </View>
    )
  }

  getUserStyle = (index) => {
    if (index === this.state.selectedUser) {
      return {
        borderWidth: 3,
        borderRadius: 3,
        borderColor: 'red',
      }
    }

    return { marginLeft: 20 }
  }
}

const styles = StyleSheet.create({
  cancelAggreeFooter:{
    flex: 0.1,
    flexDirection:'row',
    color: '#3F3F3F',
    backgroundColor: '#3F3F3F',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: '10%',
    marginTop: -30,
    //top: 200,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  buttonOk:{
    backgroundColor:'#FFFFFF',
    color:'#16ACB8',
    borderColor: '#45BCFF',
    width: '45%',
    height: '65%',
    borderRadius:10,
    borderWidth: 2
  }
});

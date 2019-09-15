import React from "react";
import { ListView, Text, View, CheckBox } from 'react-native';


export class SplitScreen extends React.Component {

  // usersSelected = this.props.navigation.getParam('users', null);
  // billItems = this.props.navigation.getParam('billItems', null);

  constructor(props) {
    super(props);

    const usersSelected = this.props.navigation.getParam('users', null);
    const billItems = this.props.navigation.getParam('billItems', null);
    
    const partDs = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const itemsDs = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      peopleDataSource: partDs.cloneWithRows(usersSelected),
      itemDataSource: itemsDs.cloneWithRows(billItems),
      selectedUser: 0
    }
  };
  render() {
    return (
      <View style={{ paddingTop: 100, flex: 1, flexDirection: 'row' }}>
        <View style={{ width: "35%" }}>
          <ListView
            dataSource={this.state.peopleDataSource}
            renderRow={
              (rowData, sectionID, rowID, higlightRow) =>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <CheckBox
                    title={rowData.name}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value={this.state.selectedUser === rowID}
                    onPress={() => this.setState({ selectedUser: rowID })}
                  ></CheckBox>
                  <Text>{rowData.name}</Text>
                </View>}
          />
        </View>
        <View style={{ width: "65%" }}>
          <ListView
            dataSource={this.state.itemDataSource}
            renderRow={
              (rowData) => <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text>{rowData.name}</Text>
                <Text>{rowData.price}</Text>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}></CheckBox>
              </View>}
          />
        </View>
      </View>
    )
  }
}

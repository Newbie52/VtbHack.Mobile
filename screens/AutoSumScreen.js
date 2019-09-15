import React, { Component } from 'react'
import { ListView, Text, View, CheckBox } from 'react-native';
import { ParticipantCard } from './ContactsScreen'

const items = [
    {
        "name": "Барак Бургер",
        "price": 280
    },
    {
        "name": "Барак Бургер",
        "price": 280
    },
    {
        "name": "Барак Бургер",
        "price": 280
    },
    {
        "name": "Петрюс Ред для Андрея",
        "price": 280
    },
    {
        "name": "Петрюс Ред для Андрея",
        "price": 280
    },
    {
        "name": "Горькое пиво для Егора",
        "price": 190
    },
    {
        "name": "Набор закусок к пиву №1",
        "price": 250
    }
];
const part = ["Джейсон1", "Джейсон2"];


export class AutoSumScreen extends React.Component {
    constructor() {
        super();
        const partDs = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const itemsDs = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            peopleDataSource: partDs.cloneWithRows(part),
            itemDataSource: itemsDs.cloneWithRows(items),
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
                                <View style={{flex:1, flexDirection:'row'}}>
                                    <CheckBox
                                        title={rowData}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.selectedUser === rowID}
                                        onPress={() => this.setState({ selectedUser: rowID })}
                                    ></CheckBox>
                                    <Text>{rowData}</Text>
                                </View>}
                    />
                </View>
                <View style={{ width: "65%" }}>
                    <ListView
                        dataSource={this.state.itemDataSource}
                        renderRow={
                            (rowData) => <View style={{flex:1, flexDirection:'row'}}>
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

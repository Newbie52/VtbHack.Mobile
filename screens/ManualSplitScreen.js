import React, { Component } from 'react'
import { Text, View, ListView, TouchableNativeFeedback, StyleSheet, Button } from "react-native";

export default class ManualSplitScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            invoces=[]
        };
    }

    render() {
        return (
            <View>
                <ParticipantManualCard/>
                <View style={styles.cancelAggreeFooter}>
                    <Button style={styles.buttonCancel} title='Отмена'></Button>
                    <Button style={styles.buttonOk} title='Готово'></Button>
                </View>
            </View>
        )
    }
}


export class ParticipantManualCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
        };
    }

    onChanged(text)
    {
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
        }
        this.setState({ amount: newText });
    }
    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
                <TextInput
                    keyboardType='numeric'
                    onChangeText={(text) => this.onChanged(text)}
                    value={this.state.amount}
                    maxLength={10}  //setting limit of input
                />
            </View>
        )
    }
}
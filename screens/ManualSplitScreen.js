import React, { Component } from 'react'
import { Text, View, ListView, TouchableNativeFeedback, StyleSheet, Button, TextInput } from "react-native";

export default class ManualSplitScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            invoces: []
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
            amount: 250,
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
                {/* <Text>{this.props.name}</Text> */}
                <View style={{ flexDirection: 'row' }}> 
                    <Text style={{flex: 0.3, marginLeft: 20}}>Джейсон</Text>
                    <View style={{ 
                        flex: 0.7, 
                        marginRight: 20,
                        backgroundColor: "#FFFFFF",
                        height: 50, 
                        width: 210,
                        borderRadius: 20, 
                        borderWidth:1,
                        borderColor: '#16ACB8',
                        alignContent: 'center',
                        justifyContent: 'center' }}>
                        <TextInput
                            keyboardType='numeric'
                            onChangeText={(text) => this.onChanged(text)}
                            value={this.state.amount}
                            maxLength={10}  //setting limit of input
                        />
                    </View>
                </View>
            </View>
        )
    }
}
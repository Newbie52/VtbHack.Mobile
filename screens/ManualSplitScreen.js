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
                <TouchableOpacity style={styles.buttonCancel} onPress={() => {  }}>
                <Text style={{  alignSelf: 'center',
                                color: '#16ACB8',
                                fontSize: 18,
                                fontWeight: 'normal',
                                paddingTop:5
                            }}>Отмена</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOk} onPress={() => {  }}>
              <Text style={{ 
                            alignSelf: 'center',
                            color: '#81818',
                            fontSize: 18,
                            fontWeight: 'normal',
                            paddingTop:5
                           }}>Готово</Text>
            </TouchableOpacity>
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

        newText = newText + ' рублей';
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
                            style={{alignSelf: 'center'}}
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
    buttonCancel:{
      backgroundColor:'#FFFFFF',
      color:'#818181',
      borderColor: '#45BCFF',
      width: '30%',
      height: '65%',
      marginLeft: 20,
      marginRight: 40,
      borderRadius:10,
      borderWidth: 2
    },
    buttonOk:{
      backgroundColor:'#FFFFFF',
      color:'#16ACB8',
      borderColor: '#45BCFF',
      width: '30%',
      height: '65%',
      marginRight: 20,
      marginLeft: 40,
      borderRadius:10,
      borderWidth: 2
    },
  });
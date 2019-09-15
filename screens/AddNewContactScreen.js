import React, { Component } from 'react'
import {Button, Text, TextInput, View} from 'react-native';

export class AddNewContactScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: this.props.navigation.getParam('address', null)
        };
    }
    onChanged(text) {
        this.setState({ name: text });
    }

    saveContact() {
        //save contact to local memory
        //navigate to contacts screen
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style={{ height: 40, width: 300}}
                    onChangeText={(text) => this.onChanged(text)}
                    value={this.state.name}
                />
                <Text>{this.state.address}</Text>
                <Button title='Добавить' onPress={() => this.saveContact()}></Button>
            </View>
        )
    }
}

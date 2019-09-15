import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native';
import { AsyncStorage } from 'react-native';

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

    async saveContact() {
        try {
            var contacts = await AsyncStorage.getItem("Contacts");
            if (contacts == null) {
                contacts = "";
            }
            await AsyncStorage.setItem("Contacts", contacts + ";" + this.state.name + ":" + this.state.address);
            this.props.navigation.navigate('Contacts')
        } catch (error) {
            // Error saving data
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput style={{ height: 40, width: 300 }}
                    onChangeText={(text) => this.onChanged(text)}
                    value={this.state.name}
                />
                <Text>{this.state.address}</Text>
                <Button title='Добавить' onPress={async () => await this.saveContact()}></Button>
            </View>
        )
    }
}

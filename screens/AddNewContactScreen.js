import React, { Component } from 'react'
import { Button } from 'react-native';

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
            <View>
                <TextInput
                    onChangeText={(text) => this.onChanged(text)}
                    value={this.state.name}
                />
                <Text>{this.state.address}</Text>
                <Button onPress={() => this.saveContact()}></Button>
            </View>
        )
    }
}

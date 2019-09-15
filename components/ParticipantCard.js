import React from "react";
import {Text, TouchableNativeFeedback, View} from "react-native";

export class ParticipantCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  onClick() {
    this.props.updateParent(this.props.id, !this.state.selected, this.props.name, this.props.address);
    this.setState({ selected: !this.state.selected });
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={() => this.onClick()}>
        <View style={{ backgroundColor: this.state.selected ? "#CAECFF" : "#FFFFFF", height: 50, borderRadius: 20, padding: 10 }}>
          <Text>{this.props.name}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

import { Text, View, TouchableNativeFeedback } from "react-native";
import React from "react";




export class PeopleScreen extends React.Component {

  list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ParticipantCard name={'Джсон стетхем'} />
      </View>
    );
  }
}

export class ParticipantCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  render() {
    return (
      <TouchableNativeFeedback>
        <View style={{ width: "80%", backgroundColor: "#CAECFF", height: "10%", borderRadius: 20, padding: 10 }}>
          <Text>{this.props.name}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}


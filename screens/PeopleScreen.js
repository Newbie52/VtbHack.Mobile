import { Text, View, TouchableNativeFeedback, StyleSheet } from "react-native";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";



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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
        <LinearGradient colors={['#000000', '#154689']} start={[0,0]} end={[1,1]} style={styles.gradientContainer}>
          <Text style={styles.header}>Участники</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', color: 'white' }}></View>
        </LinearGradient>
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

export const pos = {
  position: 'absolute',
  top: 0, 
  alignItems: 'center',
  justifyContent:'center'
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    position: pos.position,
    top: 36,
    left: 26,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


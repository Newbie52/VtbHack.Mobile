import { Text, View, ListView, TouchableNativeFeedback, StyleSheet } from "react-native";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";

export class PeopleScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
        <LinearGradient colors={['#000000', '#154689']} start={[0,0]} end={[1,1]} style={styles.gradientContainer}>
          <Text style={styles.header}>Участники</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', color: 'white' }}></View>
        </LinearGradient>
        <ParticipantList/>
      </View>
    );
  }
}


export class ParticipantList extends React.Component {
  render() {
    return (
      <View>
        <ParticipantCard name={'Джсон стетхем'}/>
        <ParticipantCard name={'Иксмэль сталоне'}/>
      </View>
    )
  }
}


export class ParticipantCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  onClick() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={() => this.onClick()}>
        <View style={{ width: "80%", backgroundColor: this.state.selected?"#CAECFF":"#FFFFFF", height: "10%", borderRadius: 20, padding: 10 }}>
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


import { Text, View, ListView, TouchableNativeFeedback, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export class PeopleScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
        <LinearGradient colors={['#000000', '#154689']} start={[0, 0]} end={[1, 1]} style={styles.gradientContainer}>
          <Text style={styles.header}>Участники</Text>
          <View style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, height: "80%", marginTop:85, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', color: '#FFFFFF', backgroundColor: '#FFFFFF' }}>
            <ParticipantList/>
          </View>
        </LinearGradient>
      </View>
    );
  }
}


export class ParticipantList extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['Джсон стетхем', 'Иксмэль сталоне','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем'])
    }
  };
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={
          (rowData) =>
            <ParticipantCard name={rowData} />}
      />
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
        <View style={{ backgroundColor: this.state.selected ? "#CAECFF" : "#FFFFFF", height: 50, borderRadius: 20, padding: 10 }}>
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
  justifyContent: 'center'
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
    height: '5%',
    top: 36,
    left: 26,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


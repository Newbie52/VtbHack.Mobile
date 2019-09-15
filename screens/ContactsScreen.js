import { Text, View, ListView, TouchableNativeFeedback, StyleSheet, Button, TouchableOpacity, Image} from "react-native";
import React from "react";
import { Text, View, ListView, TouchableNativeFeedback, StyleSheet, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {ParticipantList} from "../components/ParticipantList";

export class ContactsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
        <LinearGradient colors={['#000000', '#154689']} start={[0, 0]} end={[1, 1]} style={styles.gradientContainer}>
          <Text style={styles.header}>Контакты</Text>
          <View style={{
            height: "60%", 
            marginTop: 25,
            marginBottom: 40,
            flex: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
            //color: '#FFFFFF', 
            //backgroundColor: '#3F3F3F',
            width: '80%'
          }}>
            <ParticipantList />
          </View>
          <View style={styles.addContactRow}>
            <Text style={{flex: 0.8}}>Добавить контакт</Text>
            <TouchableOpacity style={{flex: 0.2}} onPress={() => {  }}>
              <Image source={require('./img/add-contact-button.png')}/>
            </TouchableOpacity>
          </View>
        </LinearGradient>
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
  },
  cancelAggreeFooter: {
    flex: 0.1,
    flexDirection: 'row',
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
  addContactRow: {
    flexDirection: 'row',
    height: '10%',
  },
  buttonCancel: {
    backgroundColor: '#FFFFFF',
    color: '#818181',
    borderColor: '#45BCFF',
    width: '10%',
    marginLeft: 20,
    marginRight: 10,
    borderRadius: 10,
  },
  buttonOk: {
    backgroundColor: '#FFFFFF',
    color: '#16ACB8',
    borderColor: '#45BCFF',
    width: '10%',
    marginRight: 20,
    marginLeft: 10,
    borderRadius: 10,
  },
  addContactText: {
    position: 'absolute',
    width: 121,
    height: 31,
    left: 189,
    top: 670,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#FBFFFF'
  }
});


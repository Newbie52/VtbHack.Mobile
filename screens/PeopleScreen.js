import { Text, View, ListView, TouchableOpacity, StyleSheet, Button } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {ParticipantList} from "../components/ParticipantList";

export class PeopleScreen extends React.Component {

  state = {selectedUsers: []};

  updateAfterListChanged = (data) => {
    this.setState({selectedUsers: data})
  };

  billItems = this.props.navigation.getParam('billItems', null);

  goToNextScreen = () => {
    const users = this.state.selectedUsers.filter(user => user.isSelected);
    this.props.navigation.navigate('Split', { billItems: this.billItems, users: users });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
        <LinearGradient colors={['#000000', '#154689']} start={[0, 0]} end={[1, 1]} style={styles.gradientContainer}>
          <Text style={styles.header}>Участники</Text>
          <View style={styles.contactsItem}>
              <ParticipantList updateParentData={this.updateAfterListChanged}/>
          </View>
          <View style={styles.cancelAggreeFooter}>
          <TouchableOpacity style={styles.buttonCancel} onPress={() => {  }}>
                <Text style={{  alignSelf: 'center',
                                color: '#81818',
                                fontSize: 18,
                                fontWeight: 'normal',
                                paddingTop:7
                            }}>Отмена</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOk} onPress={this.goToNextScreen}>
              <Text style={{ 
                            alignSelf: 'center',
                            color: '#16ACB8',
                            fontSize: 18,
                            fontWeight: 'normal',
                            paddingTop:7
                           }}>Готово</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export const pos = {
  position: 'absolute',
  top: 0,
  alignItems: 'center',
  justifyContent: 'center'
};

const styles = StyleSheet.create({
  contactsItem : {
    flex: 0.9,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "90%",
    marginTop: 85,
    justifyContent: 'center',
    alignItems: 'stretch',
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    width: '100%'
  },
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


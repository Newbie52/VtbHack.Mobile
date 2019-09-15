import { Text, View, ListView, TouchableNativeFeedback, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ParticipantManualCard } from "./ManualSplitScreen";

export class ManualSumScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text style={styles.sumHeader}>Сумма:</Text>
          <Text style={styles.sumValue}>1250 руб</Text>
          <View style={{ 
            flex: 0.8,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            height: "80%", 
            marginTop: 85,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'stretch', 
            color: '#FFFFFF', 
            backgroundColor: '#FFFFFF',
            width: '100%' }}>
                <ParticipantManualCard/>
          </View>
          
          <View style={styles.cancelAggreeFooter}>
            <TouchableOpacity style={styles.buttonCancel} onPress={() => {  }}>
                <Text style={{  alignSelf: 'center',
                                color: '#16ACB8',
                                fontSize: 18,
                                fontWeight: 'normal',
                                paddingTop:5
                            }}>Отмена</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOk} onPress={() => {  }}>
              <Text style={{ 
                            alignSelf: 'center',
                            color: '#81818',
                            fontSize: 18,
                            fontWeight: 'normal',
                            paddingTop:5
                           }}>Готово</Text>
         </TouchableOpacity>
          </View>
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
  sumHeader: {
    position: 'absolute',
    width: 115,
    height: 15,
    left: 47,
    top: 20,
    
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    
    color: '#525252'
  },
  sumValue: {
    position: 'absolute',
    width: 115,
    height: 15,
    left: 102,
    top: 20,
    
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    
    color: '#16ACB8'
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


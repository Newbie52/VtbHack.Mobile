import {StyleSheet, Text, View, ScrollView} from "react-native";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";
import {billMock} from "../mock/bills-data";
import {ExtendedSingleBillPanel} from "../components/ExtendedSingleBillPanel";

const bill = billMock;

export class InvoiceScreen extends React.Component {
  render() {

    return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
          <LinearGradient colors={['#000000', '#154689']} start={[0,0]} end={[1,1]} style={styles.gradientContainer}>
            {/* <ScrollView style={styles.scrollView}>
              {  */}
                <View style={{marginTop: 100, height: '90%'}}>
                  <ExtendedSingleBillPanel style={{flex:0.9}} bill={bill}/>
                </View>
         {/* }
            </ScrollView> */}
          </LinearGradient>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  gradientContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  headerText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28,
    color: '#FFFFFF',
    paddingTop: 48,
    paddingLeft: 28
  },
});

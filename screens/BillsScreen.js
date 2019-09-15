import {StyleSheet, Text, View, ScrollView} from "react-native";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";
import {billsMock} from "../mock/bills-data";
import {SingleBillPanel} from "../components/SingleBillPanel";

const bills = billsMock;

export class BillsScreen extends React.Component {
  render() {

    return (
        <View style={{flex: 1, alignItems: 'stretch'}}>
          <LinearGradient colors={['#000000', '#154689']} start={[0,0]} end={[1,1]} style={styles.gradientContainer}>
            <Text style={styles.headerText}>События</Text>
            <ScrollView style={styles.scrollView}>
              { bills.map((item, key) => (
                <View style={{marginBottom: 10}} key={key}>
                  <SingleBillPanel bill={item}/>
                </View>
                ))}
            </ScrollView>
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

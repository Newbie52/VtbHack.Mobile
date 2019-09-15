import { StyleSheet, Text, View } from "react-native";
import React from "react";

export class SingleBillPanel extends React.Component {

  render() {
    const bill = this.props.bill;

    return (
      <View style={styles.panel}>
        <Text style={styles.placeName}>{bill.name}</Text>
        <Text style={styles.address}>{bill.address}</Text>
        <View style={styles.sumBlock}>
          <Text style={styles.sum}>Сумма</Text>
          <Text style={styles.sum}>{bill.sum}р</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    minHeight: 110,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 10,
    paddingBottom: 15
  },
  placeName: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28,
    color: '#154689',
  },
  address: {
    marginTop: 2,
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 21,
    color: '#595959',
  },
  sum: {
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 21,
    color: '#154689',
  },
  sumBlock: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});


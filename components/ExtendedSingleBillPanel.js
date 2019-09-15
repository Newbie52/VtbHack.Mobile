import { StyleSheet, Text, View } from "react-native";
import React from "react";

export class ExtendedSingleBillPanel extends React.Component {

    render() {
        const bill = this.props.bill;

        return (
            <View style={styles.panel}>
                <Text style={styles.placeName}>{bill.name}</Text>
                <Text style={styles.address}>{bill.address}</Text>
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={styles.sumBlock}>
                        <Text style={styles.sum}>Сумма</Text>
                        <Text style={styles.sum}>{bill.sum}р</Text>
                    </View>
                    <View style={{
                        flex: 0.01,
                        borderBottomColor: '#154689',
                        borderBottomWidth: 1,
                    }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    panel: {
        height: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 10,
        paddingBottom: 15,
        marginLeft: 25,
        marginRight: 25
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
        flex: 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});


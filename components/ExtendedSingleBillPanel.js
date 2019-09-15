import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { invoicesMock } from "../mock/bills-data";
import { InvoicePanel } from "./InvoicePanel";

const invoices = invoicesMock;

export class ExtendedSingleBillPanel extends React.Component {

    render() {
        const bill = this.props.invoices;

        return (
            <View style={styles.panel}>
                <Text style={styles.placeName}>{bill.name}</Text>
                <Text style={styles.address}>{bill.address}</Text>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={styles.sumBlock}>
                        <Text style={styles.sum}>Сумма:</Text>
                        <Text style={styles.sum}>{bill.sum}р</Text>
                    </View>
                    <View style={{
                        paddingBottom: 30,
                        flex: 0.03,
                        borderBottomColor: '#154689',
                        borderBottomWidth: 1,
                    }} />
                </View>

                <ScrollView style={styles.scrollView}>
                    {invoices.map((item, key) => (
                        <View style={{ marginBottom: 10 }} key={key}>
                            <InvoicePanel invoice={item} />
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        paddingTop: 20,
        paddingHorizontal: 20
    },
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
        lineHeight: 30,
        color: '#154689',
    },
    sumBlock: {
        paddingTop: 10,
        flex: 1,
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});


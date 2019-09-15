import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar } from "react-native-elements";
import React from "react";

export class InvoicePanel extends React.Component {

    render() {
        const invoice = this.props.invoice;

        return (
            <View style={styles.panel}>
                <View style={styles.sumBlock}>
                    <View style={{ flex: 0.1, alignItems: 'center' }}>
                        <Avatar rounded activeOpacity={0.7} icon={{ name: 'user', type: 'font-awesome' }} size='medium' />
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'column', marginRight: 20 }}>
                        <Text style={styles.placeName}>{invoice.name}</Text>
                        <Text style={styles.placeMoney}>{invoice.amount}</Text>
                    </View>
                    <Image style={{ marginTop: 5, width: 20, height: 20 }} source={require('./resources/success-status.png')}/>
                </View>
                {/* <Text style={styles.address}>{invoice.money}</Text>
                <Text style={styles.address}>{invoice.status}</Text>
                <View style={styles.sumBlock}>
                    <Text style={styles.sum}>Сумма</Text>
                    <Text style={styles.sum}>{bill.sum}р</Text>
                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    panel: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 10,
        paddingBottom: 15
    },
    placeName: {
        flex: 0.6,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 28,
        color: '#154689',
    },
    placeMoney: {
        flex: 0.4,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 20,
        color: '#154689',
    },
    sumBlock: {
        height: 42,
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});


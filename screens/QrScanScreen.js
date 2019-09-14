import {Text, View} from "react-native";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";

export class QrScanScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LinearGradient colors={['#000000', '#154689']} start={[0,0]} end={[1,1]}>
          <Text>Сюды зафигачим модуль с сканированием qr кода</Text>
        </LinearGradient>
      </View>
    );
  }
}

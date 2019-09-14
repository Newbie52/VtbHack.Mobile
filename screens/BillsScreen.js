import {Text, View, StyleSheet} from "react-native";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";

export class BillsScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <LinearGradient colors={['#000000', '#154689']} start={[0,0]} end={[1,1]} style={styles.gradientContainer}>
            <Text>Тута будут чеки</Text>
          </LinearGradient>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {AppNavigator} from "./navigation/BottomTabNavigation";

console.disableYellowBox = true;

export default createAppContainer(AppNavigator);

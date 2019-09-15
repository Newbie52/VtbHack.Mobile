import {createBottomTabNavigator} from "react-navigation-tabs";
import {BillsScreen} from '../screens/BillsScreen'
import QrScanScreen from "../screens/QrScanScreen";
import {PeopleScreen} from "../screens/PeopleScreen";


export const AppNavigator = createBottomTabNavigator({
  Bills: BillsScreen,
  Circle: QrScanScreen,
  People: PeopleScreen
});

import {createBottomTabNavigator} from "react-navigation-tabs";
import {BillsScreen} from '../screens/BillsScreen'
import QrScanScreen from "../screens/QrScanScreen";
import {PeopleScreen} from "../screens/PeopleScreen";
import {ContactsScreen} from "../screens/ContactsScreen";


export const AppNavigator = createBottomTabNavigator({
  Bills: BillsScreen,
  Circle: QrScanScreen,
  Contacts: ContactsScreen
});

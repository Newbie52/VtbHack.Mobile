import { createStackNavigator } from 'react-navigation-stack';
import QrScanScreen from "../screens/QrScanScreen";
import {PeopleScreen} from "../screens/PeopleScreen";
import {SplitScreen} from "../screens/SplitScreen";
import { AddNewContactScreen} from "../screens/AddNewContactScreen";
import {ScanQrContactScreen } from "../screens/ScanQrContactScreen"

const BillAddingModuleNavigator = createStackNavigator({
  Qr: {
    navigationOptions: {
      header: null
    },
    screen: QrScanScreen
  },

  People: {
    navigationOptions: {
      header: null
    },
    screen: PeopleScreen
  },
  AddContact:{
    navigationOptions: {
      header: null
    },
    screen: AddNewContactScreen
  },
  AddNewContact:{
    screen:ScanQrContactScreen,
    navigationOptions:{
      header:null
    }
  },

  Split: {
    navigationOptions: {
      header: null
    },
    screen: SplitScreen
  }
});

BillAddingModuleNavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
});

export default BillAddingModuleNavigator;

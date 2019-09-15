import { createStackNavigator } from 'react-navigation-stack';
import QrScanScreen from "../screens/QrScanScreen";
import {PeopleScreen} from "../screens/PeopleScreen";

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
  }
});

BillAddingModuleNavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
});

export default BillAddingModuleNavigator;

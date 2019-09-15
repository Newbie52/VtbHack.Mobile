import { createStackNavigator } from 'react-navigation-stack';
import QrScanScreen from "../screens/QrScanScreen";
import {PeopleScreen} from "../screens/PeopleScreen";
import {SplitScreen} from "../screens/SplitScreen";

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

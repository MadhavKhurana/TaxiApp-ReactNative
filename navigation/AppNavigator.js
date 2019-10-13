import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Platform, StyleSheet} from 'react-native';
// import {Ionicons} from '@expo/vector-icons';
import LoginScreen from '../src/screens/LoginScreen.js';
import LikeScreen from '../src/screens/LikeScreen.js';

const Login = createStackNavigator(
  {Login: LoginScreen},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#c240c2' : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : '',
    },
  },
);

const LikeNavigator = createStackNavigator(
  {LikeNavigator: LikeScreen},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#c240c2' : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : '',
    },
  },
);

const AppNavigator = createDrawerNavigator(
  {
    Like: LikeNavigator,
    Login: Login,
  },
  {
    contentOptions: {
      activeTintColor: '#e683e6',
      labelStyle: {
        width: '100%',
      },
    },
  },
);

export default createAppContainer(AppNavigator);

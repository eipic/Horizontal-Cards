import { createStackNavigator } from 'react-navigation';
import {  HomeScreen } from '../screens';

export default Nav = createStackNavigator({
    Home:{ screen: HomeScreen}
},
{
    headerMode: 'none',
    initialRouteName: 'Home'
})
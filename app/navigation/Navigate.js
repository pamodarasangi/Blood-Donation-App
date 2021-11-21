/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import login from '../screens/login';
import resetPassword from '../screens/resetPassword';
import page01 from '../screens/page01';
import Donor01 from '../screens/Donor1';
import Finder from '../screens/Finder';

const PrimaryNavigator = createStackNavigator();
class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <PrimaryNavigator.Navigator headerMode={{}} initialRouteName="Home">
                    <PrimaryNavigator.Screen name="Home" component={Home}/>
                    <PrimaryNavigator.Screen name="login" component={login}/>
                    <PrimaryNavigator.Screen name="resetPassword" component={resetPassword}/>
                    <PrimaryNavigator.Screen name="page01" component={page01}/>
                    <PrimaryNavigator.Screen name="Donor01" component={Donor01}/>
                    <PrimaryNavigator.Screen name="Finder" component={Finder}/>
                </PrimaryNavigator.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;

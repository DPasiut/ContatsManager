import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeName';
import Login from '../screens/Login';
import Regiser from '../screens/Register';


const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Regiser}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

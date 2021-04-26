import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';


const AppNavContainer = () => {
    const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;

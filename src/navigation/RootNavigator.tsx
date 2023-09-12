import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../contexts/AuthContext';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const RootNavigator = () => {
  const {authData} = useAuth(); // Use context to check if user is logged in
  return (
    <NavigationContainer>
      {authData ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export {RootNavigator};

import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext';

const RootNavigator = () => {
  const {authData} = useAuth() // Use context to check if user is logged in

  <NavigationContainer>
    {authData ? <AppNavigator /> : <AuthNavigator />}
  </NavigationContainer>;
};

export {RootNavigator};

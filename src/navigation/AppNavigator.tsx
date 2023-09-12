import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigator = () => {
  <Stack.Navigator initialRouteName="Post">
    <Stack.Screen name="Post" component={PostScreen} />
  </Stack.Navigator>;
};

export {AppNavigator};

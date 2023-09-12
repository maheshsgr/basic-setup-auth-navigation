import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PostScreen} from 'src/screens';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Post">
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

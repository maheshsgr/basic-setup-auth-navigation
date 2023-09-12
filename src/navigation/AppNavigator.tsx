import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PostScreen, PostDetailScreen} from 'src/screens';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Post">
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

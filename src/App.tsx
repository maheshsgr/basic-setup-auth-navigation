/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Colors} from 'src/constants';
import {AuthProvider} from './contexts/AuthContext';
import {RootNavigator} from './navigation/RootNavigator';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.Primary} />
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </SafeAreaView>
  );
}

export default App;

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
import store from 'src/store/configureStore';
import {Provider} from 'react-redux';

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
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </AuthProvider>
    </SafeAreaView>
  );
}

export default App;

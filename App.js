import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message';
import {AuthProvider} from './src/context/AuthContext';
import RootNavigation from './src/stack/RootNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Toast />
        <RootNavigation />
      </AuthProvider>
    </Provider>
  );
}

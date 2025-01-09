import React, {useContext} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from '../context/AuthContext';
import {useTheme} from '../hooks/useTheme';
import {navigationRef} from '../utils/NavigationUtils';
import {NavigationContainer} from '@react-navigation/native';

export default function RootNavigation() {
  const {loggedIn} = useContext(AuthContext);
  const {myTheme} = useTheme();

  return (
    <NavigationContainer theme={myTheme} ref={navigationRef}>
      {!loggedIn ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}

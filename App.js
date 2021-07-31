import React, { useEffect } from 'react';
import { PermissionsAndroid, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';

import MainScreen from './src/screens/MainScreen';
import { config } from './src/assets/locationConfig';

// Initialized Location Configuration
Geolocation.setRNConfiguration(config);

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Location');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const App = () => {
  // Checking Permission of Location
  useEffect(() => {
    requestLocationPermission();
  });

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <MainScreen />
    </SafeAreaProvider>
  );
};

export default App;

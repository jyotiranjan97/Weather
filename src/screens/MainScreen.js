import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import globalStyles from '../styles/globalstyles';
import api from '../api/fetchWeatherData';
import { APP_ID } from '../assets/locationConfig';

const MainScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeatherData();
    }
  }, [location, fetchWeatherData]);

  // Getting Current Location
  const fetchLocation = () => {
    Geolocation.getCurrentPosition(
      info => {
        console.log('getCurrentPosition', info);
        setLocation({
          lati: info.coords.latitude,
          longi: info.coords.longitude,
        });
      },
      err => {
        console.log('getCurrentPosition.error', err);
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 3600000,
      },
    );
  };

  const fetchWeatherData = useCallback(() => {
    api
      .any({
        method: 'GET',
        url: '/data/2.5/onecall',
        params: {
          lat: location.lati,
          lon: location.longi,
          exclude: 'hourly,minutely',
          appid: APP_ID,
        },
      })
      .then(response => {
        console.log('WeatherData -------\n', response.data);
      });
  }, [location]);

  return (
    <View style={globalStyles.container}>
      <Text>Main</Text>
      {location && (
        <>
          <Text>Lati: {location.lati}</Text>
          <Text>Longi: {location.longi}</Text>
        </>
      )}
    </View>
  );
};

export default MainScreen;

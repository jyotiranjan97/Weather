import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import globalStyles from '../styles/globalstyles';

const MainScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetchLocation();
  }, []);

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

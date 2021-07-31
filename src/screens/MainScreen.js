import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch } from 'react-redux';

import globalStyles from '../styles/globalstyles';
import Location from '../components/Location/Location';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import { fetchWeatherData } from '../store/actions/weatherAction';
import ForecastList from '../components/Forecast/ForecastList';

const MainScreen = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    if (location) {
      dispatch(fetchWeatherData(location)); // fetching current weather data
    }
  }, [dispatch, location]);

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
      {location && (
        <>
          <CurrentWeather />
          <Location location={location} />
          <ForecastList />
        </>
      )}
    </View>
  );
};

export default MainScreen;

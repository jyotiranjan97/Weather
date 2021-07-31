import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch, useSelector } from 'react-redux';

import globalStyles from '../styles/globalstyles';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import { fetchWeatherData, setLoading } from '../store/actions/weatherAction';
import ForecastList from '../components/Forecast/ForecastList';
import Loader from '../components/UI/Loader';
import Error from '../components/Error/Error';

const MainScreen = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const { isLoading, isError } = useSelector(state => state.weather);

  useEffect(() => {
    fetchLocation();
  }, [fetchLocation]);

  useEffect(() => {
    if (location) {
      dispatch(fetchWeatherData(location)); // fetching current weather data
    }
  }, [dispatch, location]);

  // Getting Current Location
  const fetchLocation = useCallback(() => {
    dispatch(setLoading(true));
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
  }, [dispatch]);

  return (
    <>
      {isError ? (
        <Error location={location} />
      ) : (
        <View style={globalStyles.container}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <CurrentWeather location={location} />
              <ForecastList />
            </>
          )}
        </View>
      )}
    </>
  );
};

export default MainScreen;

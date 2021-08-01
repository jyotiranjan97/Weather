import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import globalStyles from '../styles/globalstyles';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import {
  fetchLocation,
  fetchWeatherData,
} from '../store/actions/weatherAction';
import ForecastList from '../components/Forecast/ForecastList';
import Loader from '../components/UI/Loader';
import Error from '../components/Error/Error';

const MainScreen = () => {
  const dispatch = useDispatch();

  const { location, isLoading, isError } = useSelector(state => state.weather);

  useEffect(() => {
    dispatch(fetchLocation()); // Getting location
  }, [dispatch]);

  useEffect(() => {
    if (location) {
      dispatch(fetchWeatherData(location)); // fetching current weather data
    }
  }, [dispatch, location]);

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
              <CurrentWeather />
              <ForecastList />
            </>
          )}
        </View>
      )}
    </>
  );
};

export default MainScreen;

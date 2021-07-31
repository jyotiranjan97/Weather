import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import api from '../../api/openWeatherApi';
import { APP_ID } from '../../assets/locationConfig';

const Location = ({ location }) => {
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    fetchCityName();
  }, [fetchCityName]);

  // Fetching City Name based on Location
  const fetchCityName = useCallback(() => {
    api
      .any({
        method: 'GET',
        url: '/geo/1.0/reverse',
        params: {
          lat: location.lati,
          lon: location.longi,
          limit: 1,
          appid: APP_ID,
        },
      })
      .then(response => {
        setCityName(
          response.data[0].local_names.ascii + ', ' + response.data[0].country,
        );
        console.log('City -------\n', response.data);
      });
  }, [location]);

  return (
    <View>
      <Text>City: {cityName}</Text>
    </View>
  );
};

export default Location;

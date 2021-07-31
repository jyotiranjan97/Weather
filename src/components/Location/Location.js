import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCityName } from '../../store/actions/weatherAction';

const Location = ({ location }) => {
  const dispatch = useDispatch();
  const city = useSelector(state => state.weather.cityName);

  useEffect(() => {
    console.log(typeof fetchCityName);
    dispatch(fetchCityName(location));
  }, [dispatch, location]);

  return (
    <View>
      <Text>City: {city}</Text>
    </View>
  );
};

export default Location;

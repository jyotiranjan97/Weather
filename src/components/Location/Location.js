import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCityName } from '../../store/actions/weatherAction';
import styles from './Location.style';

const Location = ({ location }) => {
  const dispatch = useDispatch();
  const city = useSelector(state => state.weather.cityName);

  useEffect(() => {
    dispatch(fetchCityName(location));
  }, [dispatch, location]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{city}</Text>
    </View>
  );
};

export default Location;

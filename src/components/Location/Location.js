import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ScalableText from 'react-native-text';

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
      <ScalableText style={styles.text}>{city}</ScalableText>
    </View>
  );
};

export default Location;

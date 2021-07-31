import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { fetchWeatherData } from '../../store/actions/weatherAction';
import Button from '../UI/Button';

import styles from './Error.style';

const Error = ({ location }) => {
  const dispatch = useDispatch();

  const onRetryButtonPress = () => {
    dispatch(fetchWeatherData(location));
    console.log('clicked');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Something Went Wrong at our End</Text>
      <Button buttonTitle="Retry" onPress={onRetryButtonPress} />
    </View>
  );
};

export default Error;

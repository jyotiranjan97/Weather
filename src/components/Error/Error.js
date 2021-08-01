import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import ScalableText from 'react-native-text';

import {
  fetchLocation,
  fetchWeatherData,
} from '../../store/actions/weatherAction';
import Button from '../UI/Button';

import styles from './Error.style';

const Error = ({ location }) => {
  const dispatch = useDispatch();

  const onRetryButtonPress = () => {
    dispatch(fetchLocation());
    dispatch(fetchWeatherData(location));
  };

  return (
    <View style={styles.container}>
      <ScalableText style={styles.text}>
        Something Went Wrong at our End
      </ScalableText>
      <Button buttonTitle="Retry" onPress={onRetryButtonPress} />
    </View>
  );
};

export default Error;

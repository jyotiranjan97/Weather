import React from 'react';
import { View } from 'react-native';
import ScalableText from 'react-native-text';

import { convertTempToCelcius } from '../../../utility/convertUtility';
import styles from './IndividualForecast.styles';

const IndividualForecast = ({ item }) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const date = new Date(item.dt * 1000);
  const dayName = days[date.getDay()];

  const temp = convertTempToCelcius(item.temp.day);

  return (
    <View style={styles.itemContainer}>
      <ScalableText style={styles.text}>{dayName}</ScalableText>
      <ScalableText style={styles.text}>{temp}&deg;</ScalableText>
    </View>
  );
};

export default IndividualForecast;

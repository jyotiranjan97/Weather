import React from 'react';
import { Text, View } from 'react-native';
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
      <Text style={styles.text}>{dayName}</Text>
      <Text style={styles.text}>{temp}</Text>
    </View>
  );
};

export default IndividualForecast;

import React from 'react';
import { Text } from 'react-native';
import { convertTempToCelcius } from '../../../utility/convertUtility';

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
    <>
      <Text>{dayName}</Text>
      <Text>{temp}</Text>
    </>
  );
};

export default IndividualForecast;

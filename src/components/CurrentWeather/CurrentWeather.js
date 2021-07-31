import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import Location from '../Location/Location';
import styles from './CurrentWeather.styles';

const CurrentWeather = ({ location }) => {
  const { currentTemp, feelsLikeTemp, windSpeed, windDirection } = useSelector(
    state => state.weather,
  );

  return (
    <View style={styles.container}>
      <View style={styles.tempContainer}>
        <Text style={styles.tempText}>{currentTemp} &deg;C</Text>
      </View>
      <View style={styles.additionalContainer}>
        <View style={styles.feelsLikeContainer}>
          <Text style={styles.headerText}>Feels Like</Text>
          <Text style={styles.valuesText}>{feelsLikeTemp} &deg;C</Text>
        </View>
        <View style={styles.windContainer}>
          <Text style={styles.headerText}>Wind Speed</Text>
          <Text style={styles.valuesText}>
            {windSpeed} {windDirection}
          </Text>
        </View>
      </View>
      <Location location={location} />
    </View>
  );
};

export default CurrentWeather;

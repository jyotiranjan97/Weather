import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import ScalableText from 'react-native-text';

import Location from '../Location/Location';
import styles from './CurrentWeather.styles';

const CurrentWeather = () => {
  const { currentTemp, feelsLikeTemp, windSpeed, windDirection } = useSelector(
    state => state.weather,
  );

  return (
    <View style={styles.container}>
      {/* Current Temperature */}
      <View style={styles.tempContainer}>
        <ScalableText style={styles.tempText}>
          {currentTemp} &deg;C
        </ScalableText>
      </View>
      {/* Wind Speed and Feels Like Temp */}
      <View style={styles.additionalContainer}>
        <View style={styles.feelsLikeContainer}>
          <ScalableText style={styles.headerText}>Feels Like</ScalableText>
          <ScalableText style={styles.valuesText}>
            {feelsLikeTemp} &deg;C
          </ScalableText>
        </View>
        <View style={styles.windContainer}>
          <ScalableText style={styles.headerText}>Wind Speed</ScalableText>
          <ScalableText style={styles.valuesText}>
            {windSpeed} {windDirection}
          </ScalableText>
        </View>
      </View>
      {/* City Name */}
      <Location />
    </View>
  );
};

export default CurrentWeather;

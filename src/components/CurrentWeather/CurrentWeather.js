import React from 'react';
import { useSelector } from 'react-redux';
const { View, Text } = require('react-native');

const CurrentWeather = () => {
  const { currentTemp, feelsLikeTemp, windSpeed, windDirection } = useSelector(
    state => state.weather,
  );

  return (
    <View>
      <View>
        <Text>{currentTemp} &deg;C</Text>
      </View>
      <View>
        <Text>Feels Like {feelsLikeTemp} &deg;C</Text>
        <Text>
          Wind Speed {windSpeed}km/hr {windDirection}
        </Text>
      </View>
    </View>
  );
};

export default CurrentWeather;

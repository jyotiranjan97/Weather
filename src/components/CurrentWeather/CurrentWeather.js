import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import Location from '../Location/Location';

const CurrentWeather = ({ location }) => {
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
        <Location location={location} />
      </View>
    </View>
  );
};

export default CurrentWeather;

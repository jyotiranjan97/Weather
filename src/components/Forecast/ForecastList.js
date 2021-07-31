import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';

import IndividualForecast from './IndividualForecast/IndividualForecast';

const ForecastList = () => {
  let { forecastDaily } = useSelector(state => state.weather);
  forecastDaily = forecastDaily.slice(1, 6);

  const renderItem = ({ item }) => <IndividualForecast item={item} />;

  return (
    <View>
      <FlatList
        data={forecastDaily}
        renderItem={renderItem}
        keyExtractor={item => item.dt}
      />
    </View>
  );
};

export default ForecastList;

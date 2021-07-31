import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';

import Separator from '../UI/Separator';
import styles from './ForecastList.style';
import IndividualForecast from './IndividualForecast/IndividualForecast';

const ForecastList = () => {
  let { forecastDaily } = useSelector(state => state.weather);
  forecastDaily = forecastDaily.slice(1, 6);

  const renderItem = ({ item }) => (
    <>
      <Separator />
      <IndividualForecast item={item} />
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={forecastDaily}
        renderItem={renderItem}
        keyExtractor={item => item.dt}
      />
    </View>
  );
};

export default ForecastList;

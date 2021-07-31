import React from 'react';
import { StyleSheet } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <AnimatedLottieView
      style={styles.loader}
      source={require('../../assets/icons/splashy-loader.json')}
      autoPlay={true}
      loop={true}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    alignSelf: 'center',
  },
});

export default Loader;

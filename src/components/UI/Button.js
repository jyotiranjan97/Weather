import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { WIDTH } from '../../utility/layout';

const Button = ({ buttonTitle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: '25%',
    width: WIDTH * 0.4,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Button;

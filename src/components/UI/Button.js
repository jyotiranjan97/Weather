import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ScalableText from 'react-native-text';

import { WIDTH } from '../../utility/layout';

const Button = ({ buttonTitle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <ScalableText style={styles.text}>{buttonTitle}</ScalableText>
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

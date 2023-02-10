/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
  },
});

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        style={styles.animation}
        source={require('./animation.json')}
        autoPlay
        loop
      />
    </View>
  );
}

export default App;

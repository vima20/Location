import React from 'react';
import { View, StyleSheet } from 'react-native';
import Map from './screens/Map';

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

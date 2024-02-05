import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function Map() {
  const [location, setLocation] = useState({
    latitude: 65.0119, // Default latitude (OUAS location)
    longitude: 25.4697, // Default longitude (OUAS location)
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    async()=>
    getUserPosition();
  }, []);

  const getUserPosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Geolocation failed');
      return;
    }

    try {
      const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setLocation({
        ...location,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={location}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

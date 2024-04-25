import React from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View>
      <Text>Latitude: {location?.coords.latitude}</Text>
      <Text>Longitude: {location?.coords.longitude}</Text>
    </View>
  );
}

export default MapScreen;

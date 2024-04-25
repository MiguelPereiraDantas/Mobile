import React from 'react';
import { View, Text } from 'react-native';
import * as Network from 'expo-network';

const WifiScreen = () => {
  const [wifiState, setWifiState] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const wifiState = await Network.getWifiStateAsync();
      setWifiState(wifiState);
    })();
  }, []);

  return (
    <View>
      <Text>Estado da Wi-Fi: {wifiState}</Text>
    </View>
  );
}

export default WifiScreen;

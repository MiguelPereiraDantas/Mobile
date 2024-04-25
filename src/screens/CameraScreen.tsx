import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const photo = await cameraRef.takePictureAsync();
        console.log('Foto capturada:', photo);
        
        // Salvando a foto na galeria do dispositivo
        const asset = await MediaLibrary.createAssetAsync(photo.uri);
        Alert.alert(
          'Foto Capturada',
          'A foto foi salva na galeria do dispositivo.',
          [{ text: 'OK' }]
        );
      } catch (error) {
        console.error('Erro ao capturar foto:', error);
      }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera 
        style={{ flex: 1 }} 
        type={Camera.Constants.Type.back}
        ref={ref => setCameraRef(ref)}
      >
        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end' }}>
          <Button title="Capturar" onPress={takePicture} />
        </View>
      </Camera>
    </View>
  );
}

export default CameraScreen;










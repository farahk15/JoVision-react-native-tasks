import React, { useState } from 'react';
import { View, Button, Alert, Image, Text } from 'react-native';

const Task27 = () => {
  const [selectedImage, setSelectedImage] = useState(1);

  const images = {
    1: require('../image/images1.png'),
    2: require('../image/image2.png'),
    3: require('../image/images3.png'),
  };

  const chooseImage = () => {
    Alert.alert(
      'Pick an Image',
      'Choose 1, 2 or 3',
      [
        { text: '1', onPress: () => setSelectedImage(1) },
        { text: '2', onPress: () => setSelectedImage(2) },
        { text: '3', onPress: () => setSelectedImage(3) },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true },
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Selected Image: {selectedImage}
      </Text>
      <Image
        source={images[selectedImage]}
        style={{ width: 200, height: 200, marginBottom: 20, borderRadius: 10 }}
        resizeMode="contain"
      />
      <Button title="Choose Image" onPress={chooseImage} />
    </View>
  );
};

export default Task27;

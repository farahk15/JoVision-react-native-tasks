import React from 'react';
import { View, FlatList, Image, Pressable, Alert, Text } from 'react-native';

const images = [
  require('../image/images1.png'),
  require('../image/image2.png'),
  require('../image/images3.png'),
];

const Task28 = () => {
  const handlePress = index => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const renderItem = ({ item, index }) => (
    <Pressable
      onPress={() => handlePress(index)}
      style={{ marginHorizontal: 8 }}
    >
      <Image
        source={item}
        style={{ width: 120, height: 120, borderRadius: 10 }}
        resizeMode="cover"
      />
    </Pressable>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 40 }}>
      <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 20 }}>
        Tap on any image:
      </Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default Task28;

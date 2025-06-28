import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const MyFunctionPage = ({ onTextChange }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <TextInput
        placeholder="Type something..."
        onChangeText={onTextChange}
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          padding: 8,
          borderRadius: 5,
        }}
      />
    </View>
  );
};

const Task22 = () => {
  const [text, setText] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Text from child: {text}
      </Text>
      <MyFunctionPage onTextChange={setText} />
    </View>
  );
};

export default Task22;

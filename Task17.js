import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const Task17 = () => {
  const [visible, setVisible] = useState(false);

  const toggleText = () => {
    setVisible(prev => !prev);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title={visible ? 'Hide' : 'Show'} onPress={toggleText} />
      {visible && (
        <Text style={{ marginTop: 20, fontSize: 18 }}>farah arada</Text>
      )}
    </View>
  );
};

export default Task17;

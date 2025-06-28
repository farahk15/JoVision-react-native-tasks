import React, { useState, useEffect } from 'react';
import { View, Button, Text, Alert } from 'react-native';

const MyFunctionPage = () => {
  useEffect(() => {
    Alert.alert('MyFunctionPage loaded');

    return () => {
      Alert.alert('MyFunctionPage unloaded');
    };
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20 }}>This is MyFunctionPage</Text>
      <Text style={{ fontSize: 16, color: 'gray' }}>by Farah</Text>
    </View>
  );
};

const Task21 = () => {
  const [showPage, setShowPage] = useState(false);

  const handleToggle = () => {
    setShowPage(prev => !prev);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title={showPage ? 'Hide' : 'Show'} onPress={handleToggle} />
      {showPage && <MyFunctionPage />}
    </View>
  );
};

export default Task21;

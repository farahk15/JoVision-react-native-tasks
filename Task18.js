import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Task18 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <>
          <ActivityIndicator size="large" color="#6200ee" />
          <Text style={{ marginTop: 20, fontSize: 18 }}>Loading...</Text>
        </>
      ) : (
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>farah arada</Text>
      )}
    </View>
  );
};

export default Task18;

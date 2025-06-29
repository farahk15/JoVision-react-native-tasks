import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

const Task26 = () => {
  const [ip, setIP] = useState('');
  const [loading, setLoading] = useState(false);

  const getIPNonBlocking = () => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setIP(data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP:', error);
      });
  };

  const getIPBlocking = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIP(data.ip);
    } catch (error) {
      console.error('Error fetching IP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20, textAlign: 'center' }}>
        Your IP: {ip}
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <>
          <View style={{ marginVertical: 10 }}>
            <Button title="Get IP (Non-blocking)" onPress={getIPNonBlocking} />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button title="Get IP (Blocking)" onPress={getIPBlocking} />
          </View>
        </>
      )}
    </View>
  );
};

export default Task26;

import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

class MyClassPage extends React.Component {
  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>This is MyClassPage</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>by Farah</Text>
      </View>
    );
  }
}

const Task19 = () => {
  const [showPage, setShowPage] = useState(false);

  const handleToggle = () => {
    setShowPage(prev => !prev);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title={showPage ? 'Hide' : 'Show'} onPress={handleToggle} />
      {showPage && <MyClassPage />}
    </View>
  );
};

export default Task19;

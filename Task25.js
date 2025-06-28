import React, { Component, useState, createRef } from 'react';
import { View, Text, TextInput } from 'react-native';

class MyClassPage extends Component {
  state = {
    text: '',
  };

  updateText(newText) {
    this.setState({ text: newText });
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, color: 'green' }}>{this.state.text}</Text>
      </View>
    );
  }
}

const Task25 = () => {
  const [inputText, setInputText] = useState('');
  const classRef = createRef();

  const handleChange = text => {
    setInputText(text);
    if (classRef.current) {
      classRef.current.updateText(text);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput
        placeholder="Type something..."
        onChangeText={handleChange}
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          padding: 8,
          borderRadius: 5,
        }}
      />
      <MyClassPage ref={classRef} />
    </View>
  );
};

export default Task25;

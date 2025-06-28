import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { View, Text, TextInput } from 'react-native';

const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setText(newText);
    },
  }));

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, color: 'blue' }}>{text}</Text>
    </View>
  );
});

const Task24 = () => {
  const [inputText, setInputText] = useState('');
  const childRef = useRef(null);

  const handleChange = text => {
    setInputText(text);
    if (childRef.current) {
      childRef.current.updateText(text);
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
      <MyFunctionPage ref={childRef} />
    </View>
  );
};

export default Task24;

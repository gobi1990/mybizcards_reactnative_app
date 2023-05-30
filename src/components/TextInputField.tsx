import {TextInput, StyleSheet, View, Text} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';

interface Props {
  type: any;
  inputText: string;
  onChangeText: any;
  error: string;
}

const TextInputField: React.FC<Props> = ({
  type,
  onChangeText,
  inputText,
  error,
}): JSX.Element => {
  const [keyboardInputType, setKeyBoardInputType] = useState('default');

  //const inputType = useMemo(() => {});

  useEffect(() => {
    switch (type) {
      case 'Email':
        setKeyBoardInputType('email-address');
        break;
      case 'Phone':
        setKeyBoardInputType('phone-pad');
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <View>
      <Text style={styles.title}>{type}</Text>
      <TextInput
        style={styles.input}
        placeholder={type}
        placeholderTextColor="grey"
        value={inputText}
        keyboardType={keyboardInputType}
        onChangeText={text => onChangeText(text)}
      />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 5,
    color: 'black',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    paddingBottom: 10,
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F05855',
    paddingBottom: 10,
    paddingLeft: 5,
  },
});

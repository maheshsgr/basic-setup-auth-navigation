import {Colors} from 'src/constants';
import React from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';
interface Props {
  onChangeText: () => void;
  placeholder: string;
  value: string;
  secureTextEntry?: boolean;
  error?: any;
}
const InputBox: React.FC<Props> = ({
  onChangeText,
  placeholder,
  value,
  secureTextEntry,
  error,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={Colors.Input}
        style={styles.input}
        placeholder={placeholder || ''}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={styles.error}>*{error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: Colors.Input,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    color: Colors.Input,
    fontWeight: '600',
    backgroundColor: Colors.White,
  },
  error: {color: Colors.Error, marginTop: 2, marginLeft: 4, fontSize: 12},
});

export default InputBox;

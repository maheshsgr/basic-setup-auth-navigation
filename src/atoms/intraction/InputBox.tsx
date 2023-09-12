import {Colors} from 'src/constants';
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
interface Props {
  onChangeText: () => void;
  placeholder: string;
  value: string;
  secureTextEntry: boolean;
}
const InputBox: React.FC<Props> = ({
  onChangeText,
  placeholder,
  value,
  secureTextEntry,
}) => {
  return (
    <TextInput
      placeholderTextColor={Colors.Input}
      style={styles.input}
      placeholder={placeholder || ''}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: Colors.Input,
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
    color: Colors.Input,
    fontWeight: '600',
    backgroundColor: Colors.White,
  },
});

export default InputBox;

import {Colors} from 'src/constants';
import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
interface Props {
  onPress: () => void;
  text: String;
}

const ButtonPrimary: React.FC<Props> = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Button,
    borderColor: Colors.ButtonBorder,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ButtonPrimary;

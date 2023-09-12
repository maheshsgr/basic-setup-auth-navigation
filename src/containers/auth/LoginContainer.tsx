import React, {useEffect} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import {LoginFormData} from '../../types/Forms';
import {useForm, Controller} from 'react-hook-form';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {LoginComponent} from '../../components';

const LoginContainer: React.FC = () => {
  useEffect(() => {
    console.log('hello1');
  });
  const {login} = useAuth(); // Use the login function from your custom hook
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log('onSubmit', data);
    // Check if username and password are valid (you can replace this with your logic)
    if (data.username === 'admin' && data.password === 'admin') {
      login(data);
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <LoginComponent
      handleSubmit={handleSubmit(onSubmit)}
      control={control}
      errors={errors}
    />
  );
};

export default LoginContainer;

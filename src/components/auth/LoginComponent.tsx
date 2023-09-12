import React, {useEffect} from 'react';
import {View, Text, Animated, Easing, StyleSheet, Image} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {LoginFormData} from 'src/types/Forms';
import {Images} from 'src/assets';
import LinearGradient from 'react-native-linear-gradient';
import {InputBox, ButtonPrimary} from 'src/atoms';

interface Props {
  handleSubmit: () => void;
  control: any;
  errors: any;
}
const LoginComponent: React.FC<Props> = ({handleSubmit, control, errors}) => {
  useEffect(() => {
    startAnimation();
  }, []);

  //animation block
  const translateY = new Animated.Value(0);

  const startAnimation = () => {
    translateY.setValue(-10); // Initial position off the screen
    Animated.timing(translateY, {
      toValue: 0, // Final position at the top
      duration: 600,
      easing: Easing.ease, // Use a bounce effect
      useNativeDriver: true, // Use native driver for performance
    }).start();
  };
  return (
    <LinearGradient
      colors={['#fff', '#fff', '#0d6efd']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Animated.View
          style={[styles.logoContainer, {transform: [{translateY}]}]}>
          <Image source={Images.MainLogo} style={styles.logoImage} />
        </Animated.View>
        <Controller
          control={control}
          render={({field}) => (
            <InputBox
              placeholder="Username"
              onChangeText={field.onChange}
              value={field.value}
              error={errors.username}
            />
          )}
          name="username"
          defaultValue=""
          rules={{required: 'Username is required'}}
        />
        <Controller
          control={control}
          render={({field}) => (
            <InputBox
              placeholder="Password"
              onChangeText={field.onChange}
              secureTextEntry
              value={field.value}
              error={errors.password}
            />
          )}
          name="password"
          defaultValue=""
          rules={{required: 'Password is required'}}
        />
        <ButtonPrimary onPress={handleSubmit} text={'Login'} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoImage: {
    width: 200,
    height: 65.2,
    marginBottom: 40,
  },
});

export default LoginComponent;

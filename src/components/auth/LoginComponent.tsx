import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
  Image,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {LoginFormData} from 'src/types/Forms';
import {Images} from 'src/assets';
import LinearGradient from 'react-native-linear-gradient';
import {InputBox} from 'src/atoms';

interface Props {
  onSubmit: (formData: LoginFormData) => void;
  control: any;
  errors: any;
}
const LoginComponent: React.FC<Props> = ({onSubmit, control, errors}) => {
  useEffect(() => {
    startAnimation();
  }, []);
  const translateY = new Animated.Value(0);

  const handleLogin = () => {
    // if (
    //   username === 'yourHardcodedUsername' &&
    //   password === 'yourHardcodedPassword'
    // )
    if (false) {
      // signIn(username);
    } else {
      // Shake animation on login failure
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: 10,
          duration: 50,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -10,
          duration: 50,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 10,
          duration: 50,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 50,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start();

      // Show login failed message
      setTimeout(() => {
        alert('Login Failed: Invalid username or password');
      }, 400);
    }
  };

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
            />
          )}
          name="username"
          defaultValue=""
          rules={{required: true}}
        />
        {errors.username && <Text>This field is required.</Text>}
        <Controller
          control={control}
          render={({field}) => (
            <InputBox
              placeholder="Password"
              onChangeText={field.onChange}
              secureTextEntry
              value={field.value}
            />
          )}
          name="password"
          defaultValue=""
          rules={{required: true}}
        />
        {errors.password && <Text>This field is required.</Text>}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            handleLogin();
            startAnimation();
          }}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
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
  },
  loginButton: {
    backgroundColor: '#0d6efd',
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LoginComponent;

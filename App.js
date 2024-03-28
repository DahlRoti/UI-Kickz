import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReusableInput = ({ label, icon }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.inputView}>
      <Icon
        name={icon}
        size={20}
        color={isFocused ? '#7E49FF' : '#64748B'}
        style={styles.icon}
      />
      <TextInput
        style={styles.textInput}
        placeholder={label}
        placeholderTextColor="#64748B"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const LoginScreen = () => {
  return (
    <ImageBackground source={require("./assets/shoe-pattern.png")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login to Your Account</Text>
        <View style={styles.imageWrapper}>
          <Image
            source={require("./assets/mainImage.png")}
            style={styles.mainImage}
          />
        </View>
        <View style={styles.formWrapper}>
          <ReusableInput label="Email" icon="envelope" />
          <ReusableInput label="Password" icon="lock" />
          <TouchableOpacity onPress={() => alert('Redirect to password recovery screen')} style={styles.forgetPasswordButton}>
            <Text style={styles.forgetPasswordText}>Forget password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Redirect to sign up screen')} style={styles.signUpButton}>
            <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Stretch background image to cover entire screen
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Light background color with opacity
    padding: 16,
  },
  imageWrapper: {
    alignItems: "center",
  },
  mainImage: {
    width: 200,
    height: 100,
    marginTop: 16, // Adjust this margin to align with the title
    marginBottom: 0,
  },
  formWrapper: {
    alignItems: "stretch",
  },
  inputView: {
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 8,
    borderColor: "rgba(226, 232, 240, 1)",
    borderWidth: 1,
    backgroundColor: "#FFF",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  textInput: {
    flex: 1,
    height: 50,
    marginLeft: 8,
    fontFamily: "Inter, sans-serif",
  },
  icon: {
    marginRight: 8,
  },
  forgetPasswordButton: {
    marginTop: 8,
  },
  forgetPasswordText: {
    color: "#424242",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  signUpButton: {
    marginTop: 8,
  },
  signUpText: {
    color: "#7E49FF",
    textAlign: "center",
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#424242",
    marginTop: 16,
    padding: 16,
  },
  loginButtonText: {
    color: "#FFF",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80, // No space between the title and the logo
  },
});

export default LoginScreen;

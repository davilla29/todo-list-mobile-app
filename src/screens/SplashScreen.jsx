import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/globalStyles";

const SplashScreen = ({ onStart }) => {
  return (
    <View style={styles.splashContainer}>
      <Text style={styles.splashTitle}>Welcome to My To-Do App</Text>
      <TouchableOpacity style={styles.startButton} onPress={onStart}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;

import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../ThemeContext"; // get the theme
import globalStyles from "../styles/globalStyles";

const SplashScreen = ({ onStart }) => {
  const { isDark } = useContext(ThemeContext); // get dark mode state
  const styles = globalStyles(isDark); // generate styles based on theme

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
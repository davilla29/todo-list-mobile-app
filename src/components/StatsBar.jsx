import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../ThemeContext";
import globalStyles from "../styles/globalStyles";

const StatsBar = ({ total, completed, remaining }) => {
  const { isDark } = useContext(ThemeContext);
  const styles = globalStyles(isDark);

  return (
    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{total}</Text>
        <Text style={styles.statLabel}>Total</Text>
      </View>

      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{completed}</Text>
        <Text style={styles.statLabel}>Completed</Text>
      </View>

      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{remaining}</Text>
        <Text style={styles.statLabel}>Remaining</Text>
      </View>
    </View>
  );
};

export default StatsBar;
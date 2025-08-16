import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FILTERS } from "../constants";
import { ThemeContext } from "../ThemeContext";
import globalStyles from "../styles/globalStyles";

const FilterButtons = ({ currentFilter, setFilter }) => {
  const { isDark } = useContext(ThemeContext);
  const styles = globalStyles(isDark);

  return (
    <View style={styles.filterContainer}>
      {Object.values(FILTERS).map((f) => (
        <TouchableOpacity
          key={f}
          style={[
            styles.filterButton,
            currentFilter === f && styles.filterButtonActive,
          ]}
          onPress={() => setFilter(f)}
        >
          <Text
            style={[
              styles.filterButtonText,
              currentFilter === f && styles.filterButtonTextActive,
            ]}
          >
            {f}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FilterButtons;
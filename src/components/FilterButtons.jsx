import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FILTERS } from "../constants";
import styles from "../styles/globalStyles";

const FilterButtons = ({ currentFilter, setFilter }) => {
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
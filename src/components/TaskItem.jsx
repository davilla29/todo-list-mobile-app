import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../ThemeContext";
import globalStyles from "../styles/globalStyles";

const TaskItem = ({ item, onToggleComplete, onDelete, onEdit }) => {
  const { isDark } = useContext(ThemeContext);
  const styles = globalStyles(isDark);

  return (
    <View style={styles.todoItem}>
      <TouchableOpacity style={styles.todoTextContainer} onPress={onEdit}>
        <Text style={[styles.todoText, item.completed && styles.completedText]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          onPress={onToggleComplete}
          style={[
            styles.completeButton,
            item.completed && styles.completedButtonActive,
          ]}
        >
          <Text style={styles.buttonText}>{item.completed ? "✓" : "○"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Text style={styles.buttonText}>✕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;
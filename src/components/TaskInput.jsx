import React, { useState, useContext } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../ThemeContext"; // import your theme context
import globalStyles from "../styles/globalStyles";

const TaskInput = ({ onAdd }) => {
  const { isDark } = useContext(ThemeContext); // get dark mode value
  const styles = globalStyles(isDark); // call the function with isDark

  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    onAdd(taskText);
    setTaskText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor={isDark ? "#ccc" : "#999"} // optional
        value={taskText}
        onChangeText={setTaskText}
        onSubmitEditing={handleAdd}
      />
      <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;
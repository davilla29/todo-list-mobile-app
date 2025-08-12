import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "../styles/globalStyles";

const TaskInput = ({ onAdd }) => {
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

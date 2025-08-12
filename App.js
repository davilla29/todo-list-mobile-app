// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   SafeAreaView,
//   Keyboard,
//   TouchableWithoutFeedback,
//   Modal,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// // Main application component
// const App = () => {
//   // State for the list of to-do items
//   const [todos, setTodos] = useState([]);
//   // State for the text input field
//   const [taskText, setTaskText] = useState("");
//   // State for the start screen visibility
//   const [isAppReady, setIsAppReady] = useState(false);
//   // State to manage the edit modal
//   const [modalVisible, setModalVisible] = useState(false);
//   // State for the text of the task being edited
//   const [editedTaskText, setEditedTaskText] = useState("");
//   // State to hold the ID of the task being edited
//   const [selectedTodoId, setSelectedTodoId] = useState(null);

//   // useEffect to load todos from local storage on app start
//   useEffect(() => {
//     const loadTodos = async () => {
//       try {
//         const storedTodos = await AsyncStorage.getItem("todos");
//         if (storedTodos !== null) {
//           setTodos(JSON.parse(storedTodos));
//         }
//       } catch (e) {
//         console.error("Failed to load todos from storage", e);
//       }
//     };
//     loadTodos();
//   }, []);

//   // useEffect to save todos to local storage whenever the todos state changes
//   useEffect(() => {
//     const saveTodos = async () => {
//       try {
//         await AsyncStorage.setItem("todos", JSON.stringify(todos));
//       } catch (e) {
//         console.error("Failed to save todos to storage", e);
//       }
//     };
//     saveTodos();
//   }, [todos]);

//   // Function to handle adding a new to-do item
//   const handleAddTodo = () => {
//     if (taskText.trim()) {
//       // Add a new todo with a unique ID and a 'completed' status
//       setTodos([
//         ...todos,
//         { id: Date.now().toString(), text: taskText, completed: false },
//       ]);
//       setTaskText(""); // Clear the input field after adding
//       Keyboard.dismiss(); // Dismiss the keyboard
//     }
//   };

//   // Function to handle deleting a to-do item
//   const handleDeleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   // Function to toggle a todo's completed status
//   const toggleComplete = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Function to start the editing process
//   const handleEditStart = (id, text) => {
//     setSelectedTodoId(id);
//     setEditedTaskText(text);
//     setModalVisible(true);
//   };

//   // Function to save the edited task
//   const handleEditSave = () => {
//     if (editedTaskText.trim()) {
//       setTodos(
//         todos.map((todo) =>
//           todo.id === selectedTodoId ? { ...todo, text: editedTaskText } : todo
//         )
//       );
//       setModalVisible(false);
//       setSelectedTodoId(null);
//       setEditedTaskText("");
//     }
//   };

//   // Render function for each item in the FlatList
//   const renderItem = ({ item }) => (
//     <View style={styles.todoItem}>
//       <TouchableOpacity
//         style={styles.todoTextContainer}
//         onPress={() => handleEditStart(item.id, item.text)}
//       >
//         <Text style={[styles.todoText, item.completed && styles.completedText]}>
//           {item.text}
//         </Text>
//       </TouchableOpacity>
//       <View style={styles.buttonGroup}>
//         <TouchableOpacity
//           onPress={() => toggleComplete(item.id)}
//           style={[
//             styles.completeButton,
//             item.completed && styles.completedButtonActive,
//           ]}
//         >
//           <Text style={styles.buttonText}>{item.completed ? "✓" : "○"}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => handleDeleteTodo(item.id)}
//           style={styles.deleteButton}
//         >
//           <Text style={styles.buttonText}>✕</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   // If the app is not ready, show the start screen
//   if (!isAppReady) {
//     return (
//       <View style={styles.splashContainer}>
//         <Text style={styles.splashTitle}>Welcome to My To-Do App</Text>
//         <TouchableOpacity
//           style={styles.startButton}
//           onPress={() => setIsAppReady(true)}
//         >
//           <Text style={styles.startButtonText}>Start</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   // Once the app is ready, show the main to-do list screen
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <SafeAreaView style={styles.container}>
//         <Text style={styles.title}>My To-Do List</Text>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Add a new task..."
//             value={taskText}
//             onChangeText={setTaskText}
//             onSubmitEditing={handleAddTodo}
//           />
//           <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
//             <Text style={styles.addButtonText}>+</Text>
//           </TouchableOpacity>
//         </View>
//         <FlatList
//           data={todos}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           style={styles.list}
//           contentContainerStyle={{ paddingBottom: 20 }}
//         />
//         {/* Edit Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalTitle}>Edit Task</Text>
//               <TextInput
//                 style={styles.modalInput}
//                 value={editedTaskText}
//                 onChangeText={setEditedTaskText}
//               />
//               <View style={styles.modalButtonGroup}>
//                 <TouchableOpacity
//                   style={[styles.modalButton, styles.modalButtonSave]}
//                   onPress={handleEditSave}
//                 >
//                   <Text style={styles.modalButtonText}>Save</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.modalButton, styles.modalButtonCancel]}
//                   onPress={() => setModalVisible(false)}
//                 >
//                   <Text style={styles.modalButtonText}>Cancel</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </SafeAreaView>
//     </TouchableWithoutFeedback>
//   );
// };

// // StyleSheet for the application's components
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop: 50,
//   },
//   splashContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#6200ee",
//   },
//   splashTitle: {
//     fontSize: 40,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 40,
//     textAlign: "center",
//     paddingHorizontal: 20,
//   },
//   startButton: {
//     backgroundColor: "#fff",
//     paddingHorizontal: 40,
//     paddingVertical: 15,
//     borderRadius: 30,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   startButtonText: {
//     color: "#6200ee",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 20,
//     color: "#333",
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     backgroundColor: "#fff",
//     fontSize: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   addButton: {
//     marginLeft: 10,
//     backgroundColor: "#6200ee",
//     height: 50,
//     width: 50,
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 24,
//   },
//   list: {
//     flex: 1,
//   },
//   todoItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#fff",
//     padding: 15,
//     marginHorizontal: 20,
//     marginBottom: 10,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   todoTextContainer: {
//     flex: 1,
//     marginRight: 10,
//   },
//   todoText: {
//     fontSize: 18,
//     color: "#555",
//   },
//   completedText: {
//     textDecorationLine: "line-through",
//     color: "#aaa",
//   },
//   buttonGroup: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   completeButton: {
//     backgroundColor: "#00c853",
//     height: 35,
//     width: 35,
//     borderRadius: 17.5,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//   },
//   completedButtonActive: {
//     backgroundColor: "#009624",
//   },
//   deleteButton: {
//     backgroundColor: "#ff5252",
//     height: 35,
//     width: 35,
//     borderRadius: 17.5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   // Modal styles
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     width: "80%",
//   },
//   modalTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 15,
//   },
//   modalInput: {
//     height: 50,
//     width: "100%",
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     fontSize: 16,
//   },
//   modalButtonGroup: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//   },
//   modalButton: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     flex: 1,
//     marginHorizontal: 5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalButtonSave: {
//     backgroundColor: "#6200ee",
//   },
//   modalButtonCancel: {
//     backgroundColor: "#ff5252",
//   },
//   modalButtonText: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// export default App;

import AppRoot from "./src/App";
export default AppRoot;

// import React, { useState, useEffect } from "react";
// import {
//   SafeAreaView,
//   Text,
//   View,
//   FlatList,
//   Keyboard,
//   TouchableWithoutFeedback,
//   Modal,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import StatsBar from "../components/StatsBar";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import TaskItem from "../components/TaskItem";
// import TaskInput from "../components/TaskInput";
// import FilterButtons from "../components/FilterButtons";
// import styles from "../styles/globalStyles";
// import { FILTERS } from "../constants";

// const TodoScreen = () => {
//   const [todos, setTodos] = useState([]);
//   const [filter, setFilter] = useState(FILTERS.ALL);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [editedTaskText, setEditedTaskText] = useState("");
//   const [selectedTodoId, setSelectedTodoId] = useState(null);

//   useEffect(() => {
//     const loadTodos = async () => {
//       const storedTodos = await AsyncStorage.getItem("todos");
//       if (storedTodos) setTodos(JSON.parse(storedTodos));
//     };
//     loadTodos();
//   }, []);

//   useEffect(() => {
//     AsyncStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const handleAddTodo = (taskText) => {
//     if (taskText.trim()) {
//       setTodos([
//         ...todos,
//         { id: Date.now().toString(), text: taskText, completed: false },
//       ]);
//     }
//   };

//   const handleDeleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const handleEditStart = (id, text) => {
//     setSelectedTodoId(id);
//     setEditedTaskText(text);
//     setModalVisible(true);
//   };

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

//   const totalCount = todos.length;
//   const completedCount = todos.filter((t) => t.completed).length;
//   const remainingCount = totalCount - completedCount;

//   const filteredTodos = todos.filter((todo) => {
//     if (filter === FILTERS.COMPLETED) return todo.completed;
//     if (filter === FILTERS.UNCOMPLETED) return !todo.completed;
//     return true;
//   });

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <SafeAreaView style={styles.container}>
//         <Text style={styles.title}>My To-Do List</Text>

//         {/* NEW: Live stats */}
//         <StatsBar
//           total={totalCount}
//           completed={completedCount}
//           remaining={remainingCount}
//         />

//         <TaskInput onAdd={handleAddTodo} />
//         <FilterButtons currentFilter={filter} setFilter={setFilter} />

//         {filteredTodos.length === 0 ? (
//           <View style={styles.emptyContainer}>
//             <Text style={styles.emptyText}>No tasks have been added</Text>
//           </View>
//         ) : (
//           <FlatList
//             data={filteredTodos}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <TaskItem
//                 item={item}
//                 onToggleComplete={() => toggleComplete(item.id)}
//                 onDelete={() => handleDeleteTodo(item.id)}
//                 onEdit={() => handleEditStart(item.id, item.text)}
//               />
//             )}
//           />
//         )}

//         {/* <FlatList
//           data={filteredTodos}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <TaskItem
//               item={item}
//               onToggleComplete={() => toggleComplete(item.id)}
//               onDelete={() => handleDeleteTodo(item.id)}
//               onEdit={() => handleEditStart(item.id, item.text)}
//             />
//           )}
//         /> */}

//         {/* Edit Modal */}
//         <Modal visible={modalVisible} transparent animationType="slide">
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

// export default TodoScreen;

import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import StatsBar from "../components/StatsBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TaskItem from "../components/TaskItem";
import TaskInput from "../components/TaskInput";
import FilterButtons from "../components/FilterButtons";
import styles from "../styles/globalStyles";
import { FILTERS } from "../constants";

const TodoScreen = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(FILTERS.ALL);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedTaskText, setEditedTaskText] = useState("");
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
      const storedTodos = await AsyncStorage.getItem("todos");
      if (storedTodos) setTodos(JSON.parse(storedTodos));
    };
    loadTodos();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (taskText) => {
    if (taskText.trim()) {
      setTodos([
        ...todos,
        { id: Date.now().toString(), text: taskText, completed: false },
      ]);
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditStart = (id, text) => {
    setSelectedTodoId(id);
    setEditedTaskText(text);
    setModalVisible(true);
  };

  const handleEditSave = () => {
    if (editedTaskText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === selectedTodoId ? { ...todo, text: editedTaskText } : todo
        )
      );
      setModalVisible(false);
      setSelectedTodoId(null);
      setEditedTaskText("");
    }
  };

  const totalCount = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;
  const remainingCount = totalCount - completedCount;

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.COMPLETED) return todo.completed;
    if (filter === FILTERS.UNCOMPLETED) return !todo.completed;
    return true;
  });

  // Set empty message based on filter
  const getEmptyMessage = () => {
    if (filter === FILTERS.ALL) return "No tasks have been added";
    if (filter === FILTERS.COMPLETED) return "No tasks have been completed";
    if (filter === FILTERS.UNCOMPLETED) return "No tasks have been added";
    return "No tasks found";
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>My To-Do List</Text>

        {/* Live stats */}
        <StatsBar
          total={totalCount}
          completed={completedCount}
          remaining={remainingCount}
        />

        <TaskInput onAdd={handleAddTodo} />
        <FilterButtons currentFilter={filter} setFilter={setFilter} />

        {filteredTodos.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>{getEmptyMessage()}</Text>
          </View>
        ) : (
          <FlatList
            data={filteredTodos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskItem
                item={item}
                onToggleComplete={() => toggleComplete(item.id)}
                onDelete={() => handleDeleteTodo(item.id)}
                onEdit={() => handleEditStart(item.id, item.text)}
              />
            )}
          />
        )}

        {/* Edit Modal */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Edit Task</Text>
              <TextInput
                style={styles.modalInput}
                value={editedTaskText}
                onChangeText={setEditedTaskText}
              />
              <View style={styles.modalButtonGroup}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonSave]}
                  onPress={handleEditSave}
                >
                  <Text style={styles.modalButtonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonCancel]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default TodoScreen;
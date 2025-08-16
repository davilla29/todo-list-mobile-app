import { StyleSheet } from "react-native";

const globalStyles = (isDark) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#121212" : "#f5f5f5",
      paddingTop: 50,
    },

    title: {
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 20,
      color: isDark ? "#fff" : "#333",
    },

    splashContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDark ? "#1E1E1E" : "#6200ee", // dark: neutral, light: purple
    },

    splashTitle: {
      fontSize: 40,
      fontWeight: "bold",
      color: isDark ? "#fff" : "#fff",
      marginBottom: 40,
      textAlign: "center",
      paddingHorizontal: 20,
    },

    startButton: {
      backgroundColor: isDark ? "#333" : "#fff",
      paddingHorizontal: 40,
      paddingVertical: 15,
      borderRadius: 30,
      elevation: 5,
    },

    startButtonText: {
      color: isDark ? "#fff" : "#6200ee",
      fontSize: 20,
      fontWeight: "bold",
    },

    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20,
      marginBottom: 20,
    },

    input: {
      flex: 1,
      height: 50,
      borderColor: isDark ? "#555" : "#ccc",
      borderWidth: 1,
      borderRadius: 25,
      paddingHorizontal: 20,
      backgroundColor: isDark ? "#1E1E1E" : "#fff",
      color: isDark ? "#fff" : "#000",
      fontSize: 16,
      elevation: 2,
    },

    addButton: {
      marginLeft: 10,
      backgroundColor: "#6200ee",
      height: 50,
      width: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      elevation: 5,
    },

    addButtonText: {
      color: "#fff",
      fontSize: 24,
    },

    todoItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: isDark ? "#1E1E1E" : "#fff",
      padding: 15,
      marginHorizontal: 20,
      marginBottom: 10,
      borderRadius: 10,
      elevation: 2,
    },

    todoTextContainer: {
      flex: 1,
      marginRight: 10,
    },

    todoText: {
      fontSize: 18,
      color: isDark ? "#eee" : "#555",
    },

    completedText: {
      textDecorationLine: "line-through",
      color: isDark ? "#777" : "#aaa",
    },

    buttonGroup: {
      flexDirection: "row",
      alignItems: "center",
    },

    completeButton: {
      backgroundColor: "#00c853",
      height: 35,
      width: 35,
      borderRadius: 17.5,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
    },

    completedButtonActive: {
      backgroundColor: "#009624",
    },

    deleteButton: {
      backgroundColor: "#ff5252",
      height: 35,
      width: 35,
      borderRadius: 17.5,
      justifyContent: "center",
      alignItems: "center",
    },

    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    modalView: {
      backgroundColor: isDark ? "#1E1E1E" : "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      elevation: 5,
      width: "80%",
    },

    modalTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 15,
      color: isDark ? "#fff" : "#000",
    },

    modalInput: {
      height: 50,
      width: "100%",
      borderColor: isDark ? "#555" : "#ccc",
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 20,
      fontSize: 16,
      backgroundColor: isDark ? "#2a2a2a" : "#fff",
      color: isDark ? "#fff" : "#000",
    },

    modalButtonGroup: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },

    modalButton: {
      borderRadius: 20,
      padding: 10,
      flex: 1,
      marginHorizontal: 5,
      justifyContent: "center",
      alignItems: "center",
    },

    modalButtonSave: {
      backgroundColor: "#6200ee",
    },

    modalButtonCancel: {
      backgroundColor: "#ff5252",
    },

    modalButtonText: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },

    filterContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 15,
    },

    filterButton: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      marginHorizontal: 5,
      borderRadius: 20,
      backgroundColor: isDark ? "#333" : "#ddd",
    },

    filterButtonActive: {
      backgroundColor: "#6200ee",
    },

    filterButtonText: {
      color: isDark ? "#eee" : "#333",
      fontWeight: "bold",
    },

    filterButtonTextActive: {
      color: "#fff",
    },

    // Stats bar
    statsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 20,
      marginBottom: 12,
      backgroundColor: isDark ? "#1E1E1E" : "#fff",
      padding: 10,
      borderRadius: 12,
      elevation: 2,
      alignItems: "center",
    },

    statItem: {
      flex: 1,
      alignItems: "center",
    },

    statNumber: {
      fontSize: 20,
      fontWeight: "bold",
      color: isDark ? "#fff" : "#333",
    },

    statLabel: {
      fontSize: 12,
      color: isDark ? "#bbb" : "#666",
      marginTop: 4,
    },

    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },

    emptyText: {
      fontSize: 16,
      color: isDark ? "#aaa" : "gray",
      textAlign: "center",
    },

    homeButton: {
      backgroundColor: "#007BFF",
      padding: 10,
      borderRadius: 8,
      alignSelf: "flex-start",
      marginBottom: 10,
    },

    homeButtonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

export default globalStyles;
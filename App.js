import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Your task name" />
        <Button title="Add +" />
      </View>
      <View style={styles.tasksContainer}>
        <Text style={styles.h1}>Tasks to complete:</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "whitesmoke",
    padding: "5%",
    paddingTop: "20%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    paddingBottom: "8%",
    borderBottomColor: "#cccccc",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginRight: 10,
    width: "50%",
  },
  tasksContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: "5%",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 20,
  },
})

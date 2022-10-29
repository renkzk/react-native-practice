import { StyleSheet, View, TextInput, Button } from "react-native"

export default function TaskCreator({ taskInputHandler, addTask, taskName }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Your task name"
        onChangeText={taskInputHandler}
        value={taskName}
      />
      <Button title="Add +" onPress={addTask} />
    </View>
  )
}

const styles = StyleSheet.create({
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
})

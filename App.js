import { useState } from "react"
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native"
import TaskItem from "./components/TaskItem"
import uuid from "react-native-uuid"

export default function App() {
  const [taskName, setTaskName] = useState("")
  const [taskList, setTaskList] = useState([])

  function taskInputHandler(value) {
    setTaskName(value)
  }
  function addTask() {
    setTaskList((currentTasks) => [...currentTasks, { name: taskName, id: uuid.v4() }])
  }
  function deleteTask(id) {
    const newTaskList = taskList.filter((task) => task.id !== id)
    setTaskList(newTaskList)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your task name"
          onChangeText={taskInputHandler}
        />
        <Button title="Add +" onPress={addTask} />
      </View>
      <View style={styles.tasksContainer}>
        <Text style={styles.h1}>Tasks to complete:</Text>
        <FlatList
          data={taskList}
          renderItem={(task) => {
            return (
              <TaskItem name={task.item.name} id={task.item.id} deleteTask={deleteTask} />
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "whitesmoke",
    paddingHorizontal: "5%",
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
    paddingTop: "5%",
    width: "100%",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
})

import { useState } from "react"
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native"
import TaskItem from "./components/TaskItem"
import uuid from "react-native-uuid"
import TaskCreator from "./components/TaskCreator"

export default function App() {
  const [taskName, setTaskName] = useState("")
  const [taskList, setTaskList] = useState([])

  function taskInputHandler(value) {
    setTaskName(value)
  }
  function addTask() {
    if (taskName === "") return
    setTaskList((currentTasks) => [...currentTasks, { name: taskName, id: uuid.v4() }])
    setTaskName("")
  }
  function deleteTask(id) {
    const newTaskList = taskList.filter((task) => task.id !== id)
    setTaskList(newTaskList)
  }

  return (
    <View style={styles.appContainer}>
      <TaskCreator
        taskInputHandler={taskInputHandler}
        addTask={addTask}
        taskName={taskName}
      />
      <View style={styles.tasksContainer} taskName={taskName}>
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

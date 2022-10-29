import { StyleSheet, View, Text, Pressable } from "react-native"

export default function TaskItem({ id, name, deleteTask }) {
  return (
    <View style={styles.taskItem} key={id}>
      <Text>{name}</Text>
      <Pressable style={styles.deleteBtn} onPress={(e) => deleteTask(id)}>
        <Text>❌</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  taskItem: {
    width: 300,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#067cb3",
    marginVertical: 10,
    borderRadius: 5,
    marginHorizontal: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deleteBtn: {
    backgroundColor: "#067cb3",
    padding: 10,
    borderRadius: 5,
  },
})

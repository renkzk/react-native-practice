import { StyleSheet, View, Text, Button } from "react-native"

export default function TaskItem({ id, name, deleteTask }) {
  return (
    <View style={styles.taskItem} key={id}>
      <Text>{name}</Text>
      <Button title="❌" onPress={(e) => deleteTask(id)} />
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

    Button: {
      background: "none",
    },
  },
})

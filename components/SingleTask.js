import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const SingleTask = () => {
  //define the useState variables with an Array
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "My first task",
    },
    {
      id: 2,
      task: "My second task",
    },
    {
      id: 3,
      task: "My third task",
    },
  ]);

  function deleteTask(id) {
    alert("Task id " + id + " was deleted");
  }

  //using map function to print the results from the array
  return tasks.map(function (val) {
    return (
      <View style={styles.taskView}>
        <View style={styles.taskViewTxt}>
          <Text style={styles.taskTxt}>{val.task}</Text>
        </View>

        <View style={styles.taskBtnView}>
          <TouchableOpacity
            onPress={() => deleteTask(val.id)}
            style={styles.taskBtn}
          >
            <AntDesign name="minuscircleo" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  });
};

export default SingleTask;

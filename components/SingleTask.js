import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Text,
  TextInput,
  AsyncStorage,
} from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const SingleTask = (props) => {
  const [modal, setModal] = useState(false);

  const [actualTask, setActualTask] = useState("");

  //define the useState variables with an Array
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        //recover tasks with getItem func
        let actualTask = await AsyncStorage.getItem("tasks");
        //test if its empty so the app wont crash
        if (actualTask == null) {
          setTasks([]);
        } else {
          //using JSON to convert array to string so it can be stored
          setTasks(JSON.parse(actualTask));
        }
      } catch (error) {}
    })(); //this paretheses mean that the func is being called in a different way
  }, []);

  function addTask() {
    //this will make the window close when clicking add task button
    setModal(!modal);

    let id = 0;
    if (tasks.length > 0) {
      id = tasks[tasks.length - 1].id + 1;
    }

    let task = { id: id, task: actualTask };

    setTasks([...tasks, task]);

    //updating the tasks
    (async () => {
      try {
        await AsyncStorage.setItem("tasks", JSON.stringify([...tasks, task]));
      } catch (error) {}
    })();
  }

  //func to dele tasks using filter function
  function deleteTask(id) {
    alert("Task id " + id + " was deleted");

    //create a clone of the array, and return the data that is different of the array you are clicking
    let cloneTasks = tasks.filter(function (val) {
      return val.id != id;
    });

    //set setTasks to new values
    setTasks(cloneTasks);

    //updating the tasks
    (async () => {
      try {
        await AsyncStorage.setItem("tasks", JSON.stringify(cloneTasks));
      } catch (error) {}
    })();
  }

  return (
    <View>
      {/* Start of button add and modal component */}
      <TouchableOpacity
        onPress={() => setModal(true)}
        style={styles.openTaskBtn}
      >
        <Text style={styles.btnOpenTxt}>Add new Task!</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              onChangeText={(text) => setActualTask(text)}
              autoFocus={true}
            ></TextInput>
            <TouchableHighlight
              style={styles.openBtn}
              onPress={() => {
                addTask();
              }}
            >
              <Text style={styles.btnText}>Add Task</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      {/* End of button add and modal component */}

      {/* using map function to print the results from the array */}
      {tasks.map(function (val) {
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
      })}
    </View>
  );
};

export default SingleTask;

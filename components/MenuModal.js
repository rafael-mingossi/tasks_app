import React, { useState } from "react";
import {
  View,
  Modal,
  TouchableHighlight,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

const MenuModal = () => {
  const [modal, setModal] = useState(false);

  const [actualTask, setActualTask] = useState("");

  function addTask() {
    //this will make the window close when clicking add task button
    setModal(!modal);

    //TODO: NEED TO CHECK TASKS
    let id = 0;
    if (tasks.length > 0) {
      id = tasks[tasks.length - 1].id + 1;
    }

    let task = { id: id, task: actualTask };

    setTasks([...tasks, task]);
  }

  return (
    <View>
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
    </View>
  );
};

export default MenuModal;

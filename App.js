import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import Header from "./components/Header";
import SingleTask from "./components/SingleTask";
import MenuModal from "./components/MenuModal";

const App = () => {
  return (
    <ScrollView style={styles.mainView}>
      <Header />
      <SingleTask />
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default App;

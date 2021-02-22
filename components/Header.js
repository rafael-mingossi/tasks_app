import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./styles";

const Header = () => {
  const img = require("../assets/bg.png");

  return (
    <View>
      <ImageBackground source={img} style={styles.imgBg}></ImageBackground>
    </View>
  );
};

export default Header;

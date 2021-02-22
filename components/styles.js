import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imgBg: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    marginTop: 37,
    opacity: 0.6,
  },
  imgTxt: {
    color: "black",
    textAlign: "center",
    textAlign: "left",
    padding: 40,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    borderColor: "white",
    fontFamily: "FrederickatheGreat_400Regular",
  },
  taskView: {
    marginTop: 5,
    width: "100%",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row",
  },
  taskViewTxt: {
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  taskTxt: {
    color: "black",
  },
  taskBtnView: {
    alignItems: "flex-end",
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  taskBtn: {},
});

export default styles;

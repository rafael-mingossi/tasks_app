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
  //Modal styles
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 5,
    width: 250,
  },
  openBtn: {
    backgroundColor: "#aeb5b5",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  openTaskBtn: {
    width: 150,
    padding: 5,
    backgroundColor: "#e3e3e3",
    marginTop: 15,
    borderRadius: 20,
    borderColor: "black",
    alignSelf: "center",
  },
  btnOpenTxt: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default styles;

import { Alert } from "expo-alerts";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const AlertChildren = ({ isVisible, setVisible }) => {
  return (
    <Alert isVisible={isVisible} setVisible={setVisible}>
      <View style={styles.modalView}>
        <Image
          style={styles.image}
          source={require("../assets/alerts/customalert.png")}
        />
        <View style={styles.content}>
          <Text style={styles.text}>
            Also allows external components as content!
          </Text>
        </View>
      </View>
    </Alert>
  );
};

const styles = StyleSheet.create({
  modalView: {
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 300,
    height: 300,
    borderRadius: 100,
    backgroundColor: "#3C3C41",
    position: "relative",
  },
  image: {
    position: "absolute",
    top: -50,
    left: 100,
    width: 100,
    height: 100,
  },
  content: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
    padding: 40,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default AlertChildren;

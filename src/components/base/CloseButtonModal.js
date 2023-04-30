// import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const CloseButtonModal = ({ onPress, size = 14, color = "black" }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* <FontAwesome name="close" size={size} color={color} /> */}
    </TouchableOpacity>
  );
};

export default CloseButtonModal;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    top: 20,
    zIndex: 10,
  },
});

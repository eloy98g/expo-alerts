import React from "react";
import { Modal, View, TouchableOpacity, StyleSheet } from "react-native";

const CustomModal = ({ children, onHide, isVisible }) => {
  return (
    <Modal animationType="fade" visible={isVisible} style={styles.modal}>
      <View style={styles.centeredView}>
        <TouchableOpacity style={styles.closeContainer} onPress={onHide} />
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modal: { flex: 1, height: "100%" },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  closeContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%",
  },
});

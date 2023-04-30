import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from "react-native";

// Constants
import CloseButtonModal from "./CloseButtonModal";

const CustomModal = ({
  children,
  handleModal,
  modalVisible,
  size = "default",
  color,
  height,
  canClose = false,
  width,
  closeColor = "black",
  closeSize,
  ...props
}) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <Modal
      animationType="fade"
      visible={modalVisible}
      style={styles.modal}
      {...props}
    >
      <View style={styles.centeredView}>
        <TouchableOpacity style={styles.closeContainer} onPress={handleModal} />
        <View
          style={[
            styles.modalView,
            { maxWidth: windowWidth > 400 ? 364 : null },
            size === "window"
              ? { padding: 0 }
              : windowWidth < 370 && { padding: 12 },
            color && { backgroundColor: color },
            width && { width, maxWidth: "100%" },
            height && { height },
          ]}
        >
          {canClose === true && (
            <CloseButtonModal
              size={closeSize}
              color={closeColor}
              onPress={handleModal}
            />
          )}
          {children}
        </View>
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
  modalView: {
    width: "90%",
    maxHeight: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 18,
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
  },
});

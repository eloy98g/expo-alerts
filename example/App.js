import { useState } from "react";
import { StyleSheet, Button, View } from "react-native";

// Samples
import AlertProps from "./samples/AlertProps";

export default function App() {
  const [modal, setAlert] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Alert with props" onPress={() => setAlert("AlertProps")} />
      <AlertProps isVisible={modal === "AlertProps"} setVisible={setAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
});

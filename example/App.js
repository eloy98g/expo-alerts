import { useState } from "react";
import { StyleSheet, Button, View } from "react-native";

// Samples
import AlertChildren from "./samples/AlertChildren";
import AlertProps from "./samples/AlertProps";
import AlertProps2 from "./samples/AlertProps2";

export default function App() {
  const [modal, setAlert] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Alert with props" onPress={() => setAlert("AlertProps")} />
      <Button
        title="Other alert with props"
        onPress={() => setAlert("AlertProps2")}
      />
      <Button title="Custom Alert" onPress={() => setAlert("AlertChildren")} />
      <AlertProps isVisible={modal === "AlertProps"} setVisible={setAlert} />
      <AlertProps2 isVisible={modal === "AlertProps2"} setVisible={setAlert} />
      <AlertChildren
        isVisible={modal === "AlertChildren"}
        setVisible={setAlert}
      />
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

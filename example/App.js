import { useState } from "react";
import { StyleSheet, Button, View, Image } from "react-native";

// Samples
import AlertChildren from "./samples/AlertChildren";
import AlertProps from "./samples/AlertProps";
import AlertProps2 from "./samples/AlertProps2";
import Toast from "./samples/Toast";

export default function App() {
  const [modal, setAlert] = useState(false);
  const [toast, setToast] = useState("Toast1");

  const toastConfig1 = {
    position: "top",
    topPosition: 60,
    height: 60,
    customStyle: {
      // fontFamily:
      titleSize: 16,
      bodySize: 14,
      backgroundColor: "#18122B",
      titleColor: "white",
      bodyColor: "white",
    },
    // timeout: 2000,
    title: "This a dummie toast",
    body: "Click to see bottom toast!",
    icon: (
      <Image
        style={styles.image}
        source={require("./assets/alerts/customalert.png")}
      />
    ),
    action: () => setToast("Toast2"),
  };

  const toastConfig2 = {
    position: "bottom",
    bottomPosition: 20,
    customStyle: {
      titleSize: 16,
      bodySize: 16,
      backgroundColor: "#2AAF73",
      titleColor: "white",
      bodyColor: "white",
    },
    timeout: 3000,
    title: "Timeout Toast",
    body: "This toast will be visible for 3 seconds",
  };

  return (
    <View style={styles.container}>
      <Button title="Top Toast" onPress={() => setToast("Toast1")} />
      <Button
        title="Bottom Toast with timeout"
        onPress={() => setToast("Toast2")}
      />
      <View style={styles.divider} />
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
      <Toast
        visible={toast === "Toast1"}
        setVisible={setToast}
        config={toastConfig1}
      />
      <Toast
        visible={toast === "Toast2"}
        setVisible={setToast}
        config={toastConfig2}
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
    padding: 20,
  },
  divider: {
    width: "70%",
    height: 1,
    backgroundColor: "grey",
  },
  image: {
    height: 40,
    width: 40,
    maxHeight: 40,
    maxWidth: 40,
    resizeMode: "contain",
  },
});

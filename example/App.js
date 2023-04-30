import { Alert } from "expo-alerts";
import { useState } from "react";
import { StyleSheet, Button, View } from "react-native";

export default function App() {
  const [modal, setModal] = useState(false);

  const buttonHandler = () => {
    setModal((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <Button title="Press" onPress={buttonHandler} />
      <Alert visible={modal} setVisible={setModal} />
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

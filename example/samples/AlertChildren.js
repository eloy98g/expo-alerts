import { Alert } from "expo-alerts";
import React from "react";
import { Text } from "react-native";

const AlertChildren = ({ isVisible, setVisible }) => {
  return (
    <Alert isVisible={isVisible} setVisible={setVisible}>
      <Text>ola</Text>
    </Alert>
  );
};

export default AlertChildren;

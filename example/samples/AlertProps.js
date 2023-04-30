import { Alert } from "expo-alerts";
import React from "react";
import { Image } from "react-native";

const AlertProps = ({ isVisible, setVisible }) => {
  const dummieProps = {
    title: "Alert with props",
    body: "This is an alert customized by props.\nAwesome!",
    alertStyle: { radius: 20, padding: 18 },
    actions: {
      direction: "row",
      gap: 5,
      buttons: [
        {
          onPress: () => setVisible(),
          title: "Cancelar",
          style: { buttonColor: "white", textColor: "#E2504D" },
        },
        {
          onPress: () => setVisible(),
          title: "Aceptar",
          style: { buttonColor: "#2976B9", textColor: "white" },
        },
      ],
    },
  };

  return (
    <Alert isVisible={isVisible} setVisible={setVisible} {...dummieProps} />
  );
};

export default AlertProps;

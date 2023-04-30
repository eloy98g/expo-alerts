import { Alert } from "expo-alerts";
import React from "react";
import { Image } from "react-native";

const AlertProps2 = ({ isVisible, setVisible }) => {
  const dummieProps = {
    icon: <Image source={require("../assets/alerts/ok.png")} />,
    title: "Another alert with props",
    body: "This is an alert customized by props.\nAwesome!",
    alertStyle: { radius: 30, padding: 12 },
    actions: {
      direction: "row",
      gap: 5,
      radius: 50,
      buttons: [
        {
          onPress: () => setVisible(),
          title: "Aceptar",
          style: { buttonColor: "#2AAF73", textColor: "white" },
        },
      ],
    },
  };

  return (
    <Alert isVisible={isVisible} setVisible={setVisible} {...dummieProps} />
  );
};

export default AlertProps2;

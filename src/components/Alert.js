import React from "react";
import { View, LogBox, StyleSheet, Text, ScrollView } from "react-native";

// Base
import CustomButton from "./base/CustomButton";
import CustomModal from "./base/CustomModal";
import Divider from "./base/Divider";
// Utils
import { hasActions } from "../utils/hasActions";

LogBox.ignoreLogs(["react-native-styled-text"]);

const Alert = (props) => {
  const {
    alertStyle = {},
    actions = [],
    icon,
    timeout,
    onHide,
    isVisible,
    setVisible,
    title,
    body,
    children,
  } = props;

  const {
    radius = 20,
    bgColor = "white",
    titleColor = "black",
    titleSize = 20,
    bodySize = 14,
    bodyColor = "black",
    family,
    padding = 1,
    width = "100%",
    height = "auto",
    maxWidth = 350,
    maxHeight,
    textAlign = "center",
    gap = 20,
  } = alertStyle;

  const containerStyle = {
    borderRadius: radius,
    backgroundColor: bgColor,
    padding,
    width,
    height,
    maxWidth,
    maxHeight,
    textAlign,
    ...alertStyle,
  };

  const titleStyle = {
    color: titleColor,
    family,
    fontSize: titleSize,
    textAlign,
  };

  const bodyStyle = {
    color: bodyColor,
    family,
    fontSize: bodySize,
    textAlign,
  };

  const hasButtons = hasActions(actions);
  return (
    <CustomModal isVisible={isVisible} onHide={() => setVisible(false)}>
      {children ? (
        <>{children}</>
      ) : (
        <View style={[styles.modalView, containerStyle]}>
          {icon && <View>{icon}</View>}
          {icon && <Divider height={gap} />}
          {title && <Text style={titleStyle}>{title}</Text>}
          {body && <Divider height={gap} />}
          {body && <Text style={bodyStyle}>{body}</Text>}
          {hasButtons && <Divider height={gap} />}
          {hasButtons && (
            <View
              style={{
                width: "100%",
                flexDirection: actions.direction || "row",
              }}
            >
              {actions?.buttons?.map((button, index) => (
                <>
                  {index > 0 && (
                    <Divider
                      width={actions.direction === "row" && actions.gap}
                      height={actions.direction === "column" && actions.gap}
                    />
                  )}
                  <CustomButton
                    active
                    key={button.title}
                    onPress={button.onPress}
                    title={button.title}
                    color={button.style?.buttonColor || "#2976B9"}
                    textColor={button.style?.textColor || "white"}
                  />
                </>
              ))}
            </View>
          )}
        </View>
      )}
    </CustomModal>
  );
};

export default Alert;

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 12,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    color: "black",
    fontSize: 14,
  },
  modalView: {
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

import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
  View,
} from "react-native";

const Toast = ({ visible, config, setVisible }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      showToast();
    }
  }, [visible]);

  const {
    position = "top",
    customStyle = {
      // fontFamily:
      titleSize: 14,
      bodySize: 12,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      titleColor: "white",
      bodyColor: "grey",
    },
    timeout = false,
    title,
    body,
    bottomPosition = 60,
    topPosition = 60,
    icon,
    height = 60,
    action = () => {},
  } = config;

  const showToast = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (timeout) {
        setTimeout(() => {
          hideToast();
        }, timeout);
      }
    });
  };

  const hideToast = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  const toastStyle = StyleSheet.create({
    position: "absolute",
    bottom: position === "bottom" ? bottomPosition : null,
    top: position === "top" ? topPosition : null,
    left: 20,
    right: 20,
    height,
  });

  const containerStyle = StyleSheet.create({
    backgroundColor: customStyle.backgroundColor,
    borderRadius: 10,
    width: "100%",
    height,
    borderColor: "red",
    flexDirection: "row",
  });

  const toastTitle = StyleSheet.create({
    fontSize: customStyle.titleSize,
    color: customStyle.titleColor,
    // fontFamily: customStyle?.fontFamily || null,
  });

  const toastBody = StyleSheet.create({
    fontSize: customStyle.bodySize,
    color: customStyle.bodyColor,
    // fontFamily: customStyle?.fontFamily || null,
  });

  const toastHandler = () => {
    action();
    setVisible();
  };

  return (
    <>
      {visible && (
        <Animated.View style={[toastStyle, { opacity: fadeAnim }]}>
          <TouchableOpacity style={containerStyle} onPress={toastHandler}>
            {icon && <View style={[styles.iconContainer, height]}>{icon}</View>}
            <View
              style={[
                styles.bodyContainer,
                { paddingHorizontal: icon ? 8 : 12 },
              ]}
            >
              <Text style={toastTitle}>{title}</Text>
              <Text style={toastBody}>{body}</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  toastText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  iconContainer: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "center",
  },
});

export default Toast;

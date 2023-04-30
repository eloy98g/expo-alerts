import React from "react";
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Utils
import { lighten } from "../../utils/lighten";

const CustomButton = ({
  onPress,
  title,
  active,
  color = "#3490dc",
  textColor = "white",
  loading,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.confirmButton,
        { backgroundColor: color },
        active === false && { backgroundColor: lighten(color, 40) },
        { ...rest },
      ]}
      onPress={!active ? () => {} : onPress}
      activeOpacity={!active ? 1 : 0.3}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={[styles.confirmText, { color: textColor }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  confirmButton: {
    flex: 1,
    height: 46,
    maxHeight: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    paddingHorizontal: 18,
  },
  confirmText: {
    fontSize: 22,
    textAlign: "center",
  },
});

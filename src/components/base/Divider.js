import React from "react";
import { View } from "react-native";

const Divider = ({ height = 1, width = 1, color, ...rest }) => {
  return (
    <View
      style={{
        height,
        width,
        borderBottomWidth: color ? 1 : 0,
        borderColor: color,
        ...rest,
      }}
    />
  );
};

export default Divider;

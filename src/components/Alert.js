import React from "react";
import { View, LogBox, StyleSheet, Text, ScrollView } from "react-native";

// Base
import CustomButton from "./base/CustomButton";
import CustomModal from "./base/CustomModal";

LogBox.ignoreLogs(["react-native-styled-text"]);

const Alert = (props) => {
  const { visible, setVisible, alertData, color, textColor, icon } = props;
  return (
    <CustomModal modalVisible={visible} handleModal={() => setVisible(false)}>
      <View>{icon}</View>
      {alertData?.title && (
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.title}>{alertData.title}</Text>
        </View>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "auto", maxHeight: 300 }}
      >
        {alertData?.subtitle && (
          <View style={{ marginVertical: 20 }}>
            <Text style={[styles.text, textColor && { color: textColor }]}>
              {alertData.subtitle}
            </Text>
          </View>
        )}
      </ScrollView>
      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        {alertData?.actions ? (
          alertData.actions?.map((action) => (
            <CustomButton
              active
              key={action.title}
              onPress={() => {
                action.onPress();
                if (alertData?.action) {
                  alertData.action();
                }
                if (!alertData?.disableVisible) {
                  setVisible(false);
                }
              }}
              title={action.title}
              marginHorizontal={5}
              color={action?.color || color}
              textColor={action?.textColor || textColor}
            />
          ))
        ) : (
          <CustomButton
            active
            onPress={() => {
              if (!alertData?.disableVisible) {
                setVisible(false);
              }
              if (alertData?.action) {
                alertData.action();
              }
            }}
            title="Aceptar"
            color={color}
            textColor={textColor}
          />
        )}
      </View>
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
});

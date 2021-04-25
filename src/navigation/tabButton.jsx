import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TabButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome name="gear" color="white" size={30} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "tomato",
    bottom: 13.5,
    borderColor: "white",
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default TabButton;

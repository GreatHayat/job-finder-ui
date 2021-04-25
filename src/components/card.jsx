import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/colors";

const { width } = Dimensions.get("screen");

const Card = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => navigation.navigate("bookmark")}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5 name="react" color={Colors.secondary} size={30} />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: Colors.secondary,
              }}
            >
              Keitoto
            </Text>
            <Text style={{ fontSize: 12, color: Colors.grey }}>Onsite</Text>
          </View>
        </View>
        <FontAwesome5 name="bookmark" color={Colors.grey} size={20} />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ color: Colors.secondary, fontSize: 15 }}>
          React Developer
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <MaterialIcons name="location-on" color={Colors.grey} size={16} />
          <Text style={{ color: Colors.grey, fontSize: 12, marginLeft: 3 }}>
            Toronto, Canada
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 30,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
export default Card;

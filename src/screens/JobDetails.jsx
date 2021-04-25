import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Colors from "../constants/colors";

const JobDetails = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Colors.white }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon} activeOpacity={0.8}>
          <MaterialIcons name="arrow-back-ios" />
        </TouchableOpacity>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontSize: 18, color: Colors.secondary }}>
            Job Details
          </Text>
        </View>
        <TouchableOpacity style={styles.headerIcon} activeOpacity={0.8}>
          <Entypo name="dots-two-horizontal" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <View style={styles.detailsIcon}>
          <FontAwesome5 name="react" size={50} color={Colors.secondary} />
        </View>
        <View style={{ marginTop: 15, alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.secondary,
              fontWeight: "bold",
            }}
          >
            Keitoto
          </Text>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 3,
              flexDirection: "row",
            }}
          >
            <Text style={{ color: Colors.grey }}>Full Time</Text>
            <Entypo
              name="dot-single"
              size={20}
              color={Colors.grey}
              style={{ marginTop: 5 }}
            />

            <Text style={{ color: Colors.grey, marginLeft: 5 }}>
              React Developer
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.featureContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5 name="users" color={Colors.primary} size={16} />
          <Text
            style={{ fontSize: 12, marginLeft: 5, color: Colors.secondary }}
          >
            5 Members
          </Text>
        </View>
        <View
          style={{
            width: 1,
            height: 30,
            backgroundColor: "#ebebeb",
            marginTop: 19,
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5 name="heart" color={Colors.primary} size={16} />
          <Text
            style={{ fontSize: 12, marginLeft: 5, color: Colors.secondary }}
          >
            40 Likes
          </Text>
        </View>
        <View
          style={{
            width: 1,
            height: 30,
            backgroundColor: "#ebebeb",
            marginTop: 19,
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="location-on" color={Colors.primary} size={16} />
          <Text
            style={{ fontSize: 12, marginLeft: 5, color: Colors.secondary }}
          >
            Yogyakarta
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 25 }}>
        <Text
          style={{ color: Colors.secondary, fontSize: 18, fontWeight: "bold" }}
        >
          Job Description
        </Text>
        <Text
          style={{ marginTop: 10, color: Colors.grey, textAlign: "justify" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit
          repellat impedit maxime alias odio quod accusamus quis adipisci
          tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laborum odit repellat impedit maxime alias odio quod accusamus quis
          adipisci tempore!
        </Text>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text
          style={{ fontSize: 17, fontWeight: "bold", color: Colors.secondary }}
        >
          Skills
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Entypo name="dot-single" size={32} color={Colors.primary} />
          <Text style={{ color: Colors.grey }}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: -5 }}
        >
          <Entypo name="dot-single" size={32} color={Colors.primary} />
          <Text style={{ color: Colors.grey }}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: -5 }}
        >
          <Entypo name="dot-single" size={32} color={Colors.primary} />
          <Text style={{ color: Colors.grey }}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: -5 }}
        >
          <Entypo name="dot-single" size={32} color={Colors.primary} />
          <Text style={{ color: Colors.grey }}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: -5 }}
        >
          <Entypo name="dot-single" size={32} color={Colors.primary} />
          <Text style={{ color: Colors.grey }}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.white,
  },

  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#ebebeb",
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
    alignItems: "center",
  },

  detailsIcon: {
    width: 90,
    height: 90,
    backgroundColor: Colors.white,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  featureContainer: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    borderColor: Colors.grey,
    height: 70,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default JobDetails;

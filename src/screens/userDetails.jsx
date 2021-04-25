import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const UserDetails = ({ route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri:
              "https://images.pexels.com/photos/2940334/pexels-photo-2940334.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileText}>{route.params.user.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  profileContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingTop: 20,
    paddingLeft: 25,
    flexDirection: "row",
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  profileText: {
    width: 200,
    top: 30,
    left: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
  },
});
export default UserDetails;

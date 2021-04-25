import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import Users from "../screens/users";
import UserDetails from "../screens/userDetails";
import JobDetails from "../screens/JobDetails";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="users"
      component={Users}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        // headerTitle: () => <Tweets />,
        title: "User Tweets",
        headerTintColor: "white",
        headerTitleAlign: "center",
        // headerRight: () => (
        //   <TouchableOpacity
        //     onPress={() => alert("User Profile")}
        //     style={{
        //       marginRight: 10,
        //       width: 40,
        //       height: 40,
        //       backgroundColor: "dodgerblue",
        //       borderRadius: 50,
        //       flexDirection: "row",
        //       alignItems: "center",
        //       justifyContent: "center",
        //     }}
        //   >
        //     <Text style={{ color: "white", fontWeight: "bold" }}>P</Text>
        //   </TouchableOpacity>
        // ),
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 15 }}>
            <FontAwesome name="bars" color="white" size={25} />
          </TouchableOpacity>
        ),
      }}
    />

    <Stack.Screen
      name="user-details"
      component={UserDetails}
      options={({ route }) => ({ title: `User (${route.params.user.id})` })}
    />
    <Stack.Screen
      name="bookmark"
      // options={{ headerShown: false }}
      component={JobDetails}
    />
  </Stack.Navigator>
);

export default StackNavigator;

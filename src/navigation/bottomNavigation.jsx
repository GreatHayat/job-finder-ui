import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  Foundation,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Users from "../screens/users";
import Profile from "../screens/profile";
import StackNavigator from "./stackNavigator";
import TabButton from "./tabButton";
import Home from "../screens/Home";
import Colors from "../constants/colors";
import JobDetails from "../screens/JobDetails";
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        //activeBackgroundColor: "tomato",
        activeTintColor: "tomato",
        //inactiveBackgroundColor: "#ccc",
        inactiveTintColor: Colors.grey,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="save"
        component={JobDetails}
        options={{
          tabBarLabel: "Save",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={StackNavigator}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="chat-processing-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="profile"
        component={Profile}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TabButton onPress={() => navigation.navigate("profile")} />
          ),
        })}
      /> */}

      <Tab.Screen
        name="notifications"
        component={Home}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bell-o" size={size} color={color} />
          ),
          tabBarBadge: "4",
          tabBarBadgeStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

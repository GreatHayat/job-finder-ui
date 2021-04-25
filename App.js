import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Users from "./src/screens/users";
import UserDetails from "./src/screens/userDetails";
import BottomNavigator from "./src/navigation/bottomNavigation";

const Tweets = () => {
  return (
    <View>
      <Text>Tweets List nabeel</Text>
    </View>
  );
};

const TweetDetails = () => {
  return (
    <View>
      <Text>Tweet Details</Text>
    </View>
  );
};

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="users"
//       component={Users}
//       options={{
//         headerStyle: { backgroundColor: "dodgerblue" },
//         // headerTitle: () => <Tweets />,
//         title: "User Tweets",
//         headerTintColor: "white",
//         headerTitleAlign: "center",
//         headerRight: () => (
//           <TouchableOpacity
//             onPress={() => alert("User Profile")}
//             style={{
//               marginRight: 10,
//               width: 40,
//               height: 40,
//               backgroundColor: "tomato",
//               borderRadius: 50,
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Text style={{ color: "white", fontWeight: "bold" }}>P</Text>
//           </TouchableOpacity>
//         ),
//       }}
//     />

//     <Stack.Screen
//       name="user-details"
//       component={UserDetails}
//       options={({ route }) => ({ title: `User (${route.params.user.id})` })}
//     />
//   </Stack.Navigator>
// );
// const StackNavigator = () => (
//   <Stack.Navigator
//     initialRouteName="tweets"
//     screenOptions={{
//       headerStyle: { backgroundColor: "dodgerblue" },
//       headerTintColor: "white",
//     }}
//   >
//     <Stack.Screen
//       name="tweets"
//       component={Tweets}
//       options={{
//         headerStyle: { backgroundColor: "tomato" },
//         title: "Tweets List",
//       }}
//     />
//     <Stack.Screen
//       name="tweet-details"
//       component={TweetDetails}
//       options={({ route }) => ({ title: `${route.params.name}'s Tweet` })}
//     />
//   </Stack.Navigator>
// );

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <BottomNavigator />
      <StatusBar auto="true" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

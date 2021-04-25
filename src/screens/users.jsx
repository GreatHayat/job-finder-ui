import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";

const Users = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    setUsers([]);
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (res.status === 200) {
      setUsers(res.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.textContainer}
            id={item.id}
            onPress={() => navigation.navigate("user-details", { user: item })}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        refreshing={loading}
        onRefresh={getUsers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: "tomato",
    borderRadius: 5,
    marginBottom: 5,
  },
  text: {
    color: "white",
    fontWeight: "700",
  },
});

export default Users;

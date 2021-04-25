import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Colors from "../constants/colors";
import categories from "../constants/categories";
import Card from "../components/card";

const Home = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <AntDesign name="appstore1" size={20} color={Colors.primary} />
        </View>
        <View style={styles.headerImage}>
          <Image
            source={require("../../assets/avatar.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </View>

      <View style={styles.welcomeTextContainer}>
        <Text style={{ color: Colors.grey }}>Welcome</Text>
        <Text
          style={{
            color: Colors.secondary,
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 3,
          }}
        >
          Find Your Dream Job!
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.input}>
          <AntDesign name="search1" size={20} color={Colors.grey} />
          <TextInput
            placeholder="search your dream job"
            style={{ paddingLeft: 5, fontSize: 16, flex: 1 }}
          />
        </View>
        <TouchableOpacity style={styles.filterIcon} activeOpacity={0.8}>
          <MaterialIcons name="tune" color={Colors.white} size={28} />
        </TouchableOpacity>
      </View>

      <View style={styles.adBanner}>
        <View>
          <Text
            style={{ color: Colors.white, fontSize: 18, fontWeight: "bold" }}
          >
            Top Job in Year
          </Text>
          <Text style={{ color: Colors.white, fontSize: 14, marginTop: 15 }}>
            ReactJS Developer
          </Text>
        </View>
        <View style={{ zIndex: 1000 }}>
          <FontAwesome5 name="react" color={Colors.white} size={80} />
        </View>
      </View>

      <View style={styles.categoryContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSelectedCategory(item.id)}
              style={{
                padding: 10,
                backgroundColor:
                  selectedCategory === item.id ? Colors.primary : "#ebebeb",
                marginLeft: 10,
                borderRadius: 100,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color:
                    selectedCategory === item.id ? Colors.white : Colors.grey,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: Colors.secondary,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Popular Jobs
          </Text>
          <Text style={{ color: Colors.grey }}>View All</Text>
        </View>
      </View>

      <View style={{ flex: 1, marginTop: 30, paddingHorizontal: 20 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={categories}
          renderItem={({ item }) => (
            <View style={{ margin: 5 }}>
              <Card job={item} navigation={navigation} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 60,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light,
    elevation: 5,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeTextContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },

  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
  },
  filterIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  adBanner: {
    height: 100,
    marginHorizontal: 20,
    paddingHorizontal: 30,
    marginTop: 30,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  categoryContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
});
export default Home;

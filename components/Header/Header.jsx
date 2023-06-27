import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const [badge, setBadge] = useState(11);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../../assets/icons/instaClone.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Ionicons
            style={styles.icon}
            name="add-circle-outline"
            size={26}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            style={styles.icon}
            name="heart-outline"
            size={26}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>{badge}</Text>
          </View>
          <Ionicons
            style={styles.icon}
            name="chatbubble-ellipses-outline"
            size={26}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: "contain",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 5,
  },
  unreadBadge: {
    backgroundColor: "red",
    position: "absolute",
    borderRadius: 25,
    left: 20,
    bottom: 18,
    width: 25,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "bold",
  },
});

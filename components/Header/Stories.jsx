import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

user = {
  username: "test",
  avater: "https://picsum.photos/100/100?grayscale",
};

const Stories = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      ></ScrollView>
      <Text style={{ color: "white" }}>Stories</Text>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  userPicture: {},
  username: {},
});

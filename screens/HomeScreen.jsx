import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "./../components/Header/Header";
import Stories from "../components/Header/Stories";
function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <Stories />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useState, useEffect } from "react";
import { getLatestGames } from "./lib/metacritic";

import { Main } from "./Components/main";

//import icon from './assets/icon.png';

// aqui inicia la app llamando a main.jsx

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 3,
    backgroundColor: "#265e68",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
});

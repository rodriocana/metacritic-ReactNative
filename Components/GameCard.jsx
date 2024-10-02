import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>{game.score}</Text>
      <Text style={styles.description}>{game.description}</Text>
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
    padding: 5,
  },
  card: {
    marginBottom: 30,
  },

  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },

  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 0,
  },
  description: {
    fontSize: 16,
    color: "white",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "orange",
    marginBottom: 10,
  },

  logo: {
    color: "white",
    fontSize: 30,
    textAlign: "left",
  },
});

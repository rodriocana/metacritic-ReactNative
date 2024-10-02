import { StatusBar } from "expo-status-bar";
import { Logo } from "./Logo";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useState, useEffect } from "react";
import { getLatestGames } from "../lib/metacritic";
import Animated, {
  SlideInLeft,
  FadeOut,
  SlideInUp,
  SlideInRight,
  FadeIn,
} from "react-native-reanimated";
import { LayoutAnimation } from "react-native";

export function Main() {
  const [games, setGames] = useState([]); // creo dos constantes, games, y setgames para setearlos. useState es un array vacio
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestGames().then((games) => {
      // aqui cojo los juegos de la api en metacritic.js a través de la funcion getLatestGames y lo guardo en games.
      setGames(games);
      setLoading(false); // Detener el indicador de carga cuando los juegos se han cargado
    });
  }, []);

  // Renderiza cada item del FlatList , aqui es donde se crea el cardview con todos los datos por cada juego.

  const AnimatedContainer = Animated.createAnimatedComponent(View);

  const renderItem = ({ item, index }) => (
    <View style={styles.cardWrapper}>
      <AnimatedContainer
        style={[styles.card]} // Aplica la opacidad aquí
        entering={FadeIn.delay(index * 1000)}
        exiting={FadeOut.duration(500)}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.score}>{item.score}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </AnimatedContainer>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ margin: 12 }}>
        <View style={{ marginBottom: 20 }}>
          <Logo />
        </View>
        {loading ? ( // Mostrar indicador de carga si está cargando
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : (
          <FlatList
            data={games} // Lista de datos
            renderItem={renderItem} // Componente a renderizar para cada item, lo llamo de la constante de arriba renderItem.
            keyExtractor={(item) => item.slug} // Clave única para cada item
            contentContainerStyle={styles.scrollContainer} // Estilo del contenedor de la lista
          />
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#265e68",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardWrapper: {
    marginBottom: 30,
    overflow: "hidden", // Opcional: Para evitar que cualquier contenido sobrepase los bordes
  },
  card: {
    backgroundColor: "rgba(166, 219, 220, 0.2)", // El último valor 0.8 es la opacidad
    padding: 10,
    borderRadius: 14,
  },
  image: {
    width: 116,
    height: 152,
    borderRadius: 4,
    resizeMode: "contain", // Asegura que la imagen se ajuste dentro del contenedor sin ser cortada
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

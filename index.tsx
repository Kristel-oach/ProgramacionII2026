import { View, Text, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.contenedor}>

      <Image
        source={require("../../assets/perfil.jpeg")}
        style={styles.foto}
      />

      <Text style={styles.nombre}>
        Kristel Oneli Alessandra Canás Hernández
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fbf9fb",
  },

  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },

  nombre: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
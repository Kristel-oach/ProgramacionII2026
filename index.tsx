import { View, Text, Image, Pressable, StyleSheet } from "react-native";

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

      <Text style={styles.carrera}>
        Ingeniería en Sistemas
      </Text>

      <Text style={styles.carnet}>
        Carné: 0907-25-12846
      </Text>

      <Pressable
        style={styles.boton}
        onPress={() => console.log("Ver proyectos")}
      >
        <Text style={styles.botonTexto}>
          Ver proyectos
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#ecc9f2",
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

  carrera: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },

  carnet: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
    marginBottom: 20,
  },

  boton: {
    backgroundColor: "#622cad",
    padding: 12,
    borderRadius: 8,
  },

  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
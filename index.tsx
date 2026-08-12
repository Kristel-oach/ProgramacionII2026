import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Index() {
  const tareas = [
    'Realizar practica React Native',
    'Realizar una aplicación educativa',
    'Realizar una tarjeta de estudiante',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>
          Lista de tareas pendientes
        </Text>

        <Text style={styles.subtitulo}>
          Kristel Oneli Alessandra Canás Hernández
        </Text>
      </View>

      <View style={styles.lista}>
        <Text style={styles.tituloLista}>
          Mis tareas
        </Text>

        {tareas.map((tarea, index) => (
          <View
            key={index}
            style={styles.tarea}
          >
            <View style={styles.numero}>
              <Text style={styles.numeroTexto}>
                {index + 1}
              </Text>
            </View>

            <Text style={styles.textoTarea}>
              {tarea}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
  },

  encabezado: {
    backgroundColor: '#1c2f61',
    padding: 25,
    borderRadius: 18,
    margin: 20,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 15,
    color: '#aabae5',
    textAlign: 'center',
  },

  lista: {
    padding: 20,
  },

  tituloLista: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#3c4de1',
    marginBottom: 15,
  },

  tarea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#244aaa',
  },

  numero: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#eddff0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  numeroTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#211b9a',
  },

  textoTarea: {
    fontSize: 17,
    color: '#4eade4',
    flex: 1,
  },
});
import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Index() {
  const [tareas, setTareas] = useState<string[]>([
    'Realizar practica React Native',
    'Realizar una aplicación educativa',
    'Realizar una tarjeta de estudiante',
  ]);

  const [nuevaTarea, setNuevaTarea] = useState('');
  const [mostrarInput, setMostrarInput] = useState(false);

  const guardarTarea = () => {
    if (nuevaTarea.trim() === '') {
      return;
    }

    setTareas([...tareas, nuevaTarea.trim()]);
    setNuevaTarea('');
    setMostrarInput(false);
  };

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

      {!mostrarInput && (
        <View style={styles.botonNueva}>
          <Button
            title="＋ Nueva tarea"
            color="#6A1B9A"
            onPress={() => setMostrarInput(true)}
          />
        </View>
      )}

      {mostrarInput && (
        <View style={styles.formulario}>

          <Text style={styles.label}>
            Nueva tarea
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Escriba una tarea..."
            placeholderTextColor="#9575CD"
            value={nuevaTarea}
            onChangeText={setNuevaTarea}
          />

          <Button
            title="Guardar"
            color="#6A1B9A"
            onPress={guardarTarea}
          />

        </View>
      )}

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
    padding: 20,
  },

  encabezado: {
    backgroundColor: '#6A1B9A',
    padding: 25,
    borderRadius: 18,
    marginTop: 20,
    marginBottom: 20,
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
    color: '#E1BEE7',
    textAlign: 'center',
  },

  botonNueva: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },

  formulario: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#CE93D8',
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 10,
  },

  input: {
    borderWidth: 1.5,
    borderColor: '#AB47BC',
    borderRadius: 10,
    padding: 13,
    fontSize: 16,
    color: '#4A148C',
    backgroundColor: '#F8F0FA',
    marginBottom: 15,
  },

  lista: {
    marginTop: 5,
  },

  tituloLista: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#4A148C',
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
    borderLeftColor: '#8E24AA',
  },

  numero: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#E1BEE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  numeroTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#6A1B9A',
  },

  textoTarea: {
    fontSize: 17,
    color: '#4A148C',
    flex: 1,
  },
});
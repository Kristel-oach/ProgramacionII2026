import React, { useState } from 'react';
import {
  Button,
  Modal,
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
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [tareaAEliminar, setTareaAEliminar] = useState<number | null>(null);
  const nuevaTareaPress = () => {
    setMostrarInput(true);
  };


  const guardarTarea = () => {
    if (nuevaTarea.trim() === '') {
      return;
    }

    setTareas([...tareas, nuevaTarea.trim()]);
    setNuevaTarea('');
    setMostrarInput(false);
  };

  const confirmarEliminar = (index: number) => {
    setTareaAEliminar(index);
    setMostrarConfirmacion(true);
  };

  const cancelarEliminar = () => {
    setMostrarConfirmacion(false);
    setTareaAEliminar(null);
  };

  const eliminarTarea = () => {
    if (tareaAEliminar !== null) {
      setTareas(
        tareas.filter((_, index) => index !== tareaAEliminar)
      );
    }

    setMostrarConfirmacion(false);
    setTareaAEliminar(null);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contenido}
    >

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
            onPress={nuevaTareaPress}
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

          <View style={styles.botonGuardar}>
            <Button
              title="Guardar"
              color="#6A1B9A"
              onPress={guardarTarea}
            />
          </View>

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

            <View style={styles.contenidoTarea}>

              <Text style={styles.textoTarea}>
                {tarea}
              </Text>

              <View style={styles.botonEliminar}>
                <Button
                  title="Eliminar"
                  color="#8E24AA"
                  onPress={() => confirmarEliminar(index)}
                />
              </View>

            </View>

          </View>
        ))}

      </View>

      <Modal
        visible={mostrarConfirmacion}
        transparent={true}
        animationType="fade"
        onRequestClose={cancelarEliminar}
      >
        <View style={styles.fondoModal}>

          <View style={styles.modal}>

            <View style={styles.iconoModal}>
              <Text style={styles.signoPregunta}>
                ?
              </Text>
            </View>

            <Text style={styles.tituloModal}>
              Eliminar tarea
            </Text>

            <Text style={styles.mensajeModal}>
              ¿Está seguro que desea eliminar la tarea?
            </Text>

            <View style={styles.botonesModal}>

              <View style={styles.botonNo}>
                <Button
                  title="No"
                  color="#9575CD"
                  onPress={cancelarEliminar}
                />
              </View>

              <View style={styles.botonSi}>
                <Button
                  title="Sí"
                  color="#6A1B9A"
                  onPress={eliminarTarea}
                />
              </View>

            </View>

          </View>

        </View>
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
  },

  contenido: {
    padding: 20,
    paddingBottom: 40,
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

  botonGuardar: {
    borderRadius: 8,
    overflow: 'hidden',
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
    elevation: 3,
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

  contenidoTarea: {
    flex: 1,
  },

  textoTarea: {
    fontSize: 17,
    color: '#4A148C',
    marginBottom: 10,
  },

  botonEliminar: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    overflow: 'hidden',
  },

  fondoModal: {
    flex: 1,
    backgroundColor: 'rgba(74, 20, 140, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#CE93D8',
  },

  iconoModal: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#E1BEE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  signoPregunta: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6A1B9A',
  },

  tituloModal: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#4A148C',
    marginBottom: 12,
  },

  mensajeModal: {
    fontSize: 17,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 25,
  },

  botonesModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },

  botonNo: {
    width: 100,
    marginRight: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },

  botonSi: {
    width: 100,
    marginLeft: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },

});
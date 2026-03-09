import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, SegmentedButtons, Text } from 'react-native-paper';
import dayjs from 'dayjs';

import { database } from '../database';

// Ejemplo visual de creación de clase
export default function CreateLessonScreen() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('university');
  
  const handleSave = async () => {
    try {
      await database.write(async () => {
        const newLesson = await database.get('lesson_events').create((lesson: any) => {
          lesson.title = title || 'Nueva Clase';
          lesson.type = type;
          lesson.date = dayjs().format('YYYY-MM-DD'); // Hoy por defecto en este ejemplo
          lesson.startTime = new Date();
          lesson.endTime = dayjs().add(1, 'hour').toDate();
        });
        console.log("Clase creada:", newLesson.id);
        alert('Clase creada con éxito!');
        setTitle('');
      });
    } catch (error) {
      console.error(error);
      alert('Hubo un error al guardar');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text variant="titleLarge" style={styles.heading}>Nueva Clase</Text>
      
      <TextInput
        label="Título de la clase"
        value={title}
        onChangeText={setTitle}
        mode="outlined"
        style={styles.input}
      />

      <Text variant="bodyMedium" style={styles.label}>Tipo de Clase</Text>
      <SegmentedButtons
        value={type}
        onValueChange={setType}
        buttons={[
          { value: 'university', label: 'Universidad', icon: 'school' },
          { value: 'private', label: 'Particular', icon: 'account-group' }
        ]}
        style={styles.input}
      />

      {/* Aquí irían selectores de Fecha y Hora en una app completa */}

      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Guardar Clase
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#ffffff' },
  heading: { fontWeight: 'bold', marginBottom: 16 },
  input: { marginBottom: 16 },
  label: { marginBottom: 8, color: 'gray' },
  button: { marginTop: 16, paddingVertical: 6 }
});

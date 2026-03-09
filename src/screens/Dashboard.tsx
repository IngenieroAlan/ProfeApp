import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, useTheme, ActivityIndicator } from 'react-native-paper';
import { Q } from '@nozbe/watermelondb';
import dayjs from 'dayjs';

import { database } from '../database';
import LessonEvent from '../database/models/LessonEvent';
import LessonCard from '../components/LessonCard';

export default function Dashboard() {
  const theme = useTheme();
  const [lessons, setLessons] = useState<LessonEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ejemplo de Consulta de clases del día
    const fetchTodayLessons = async () => {
      try {
        const todayString = dayjs().format('YYYY-MM-DD');
        const todayLessons = await database.get<LessonEvent>('lesson_events')
          .query(
            Q.where('date', todayString)
          ).fetch();
        setLessons(todayLessons);
      } catch (error) {
        console.error("Error fetching today's lessons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodayLessons();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={{ color: theme.colors.primary, fontWeight: 'bold' }}>
          Clases de Hoy
        </Text>
        <Text variant="bodyLarge" style={{ color: 'gray' }}>
          {dayjs().format('DD [de] MMMM, YYYY')}
        </Text>
      </View>

      {loading ? (
        <ActivityIndicator style={{ marginTop: 20 }} />
      ) : lessons.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text variant="bodyLarge">No tienes clases programadas para hoy. ¡Disfruta tu día!</Text>
        </View>
      ) : (
        <FlatList
          data={lessons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LessonCard
              title={item.title}
              type={item.type}
              startTime={item.startTime}
              endTime={item.endTime}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { padding: 16, backgroundColor: '#ffffff', borderBottomWidth: 1, borderColor: '#e2e8f0' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32 }
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, useTheme, Icon } from 'react-native-paper';
import dayjs from 'dayjs';

interface LessonCardProps {
  title: string;
  type: 'university' | 'private';
  startTime: Date;
  endTime: Date;
}

export default function LessonCard({ title, type, startTime, endTime }: LessonCardProps) {
  const theme = useTheme();
  
  const isUniversity = type === 'university';
  const iconName = isUniversity ? 'school' : 'account-group';
  const cardColor = isUniversity ? theme.colors.primary : theme.colors.secondary;

  return (
    <Card style={[styles.card, { borderLeftColor: cardColor, borderLeftWidth: 6 }]}>
      <Card.Content style={styles.content}>
        <View style={styles.header}>
          <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{title}</Text>
          <Icon source={iconName} size={24} color={cardColor} />
        </View>
        <Text variant="bodyMedium" style={{ color: 'gray', marginTop: 4 }}>
          {dayjs(startTime).format('HH:mm')} - {dayjs(endTime).format('HH:mm')}
        </Text>
        <View style={[styles.badge, { backgroundColor: cardColor }]}>
          <Text style={styles.badgeText}>
            {isUniversity ? 'Universidad' : 'Particular'}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  content: {
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 12,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  }
});

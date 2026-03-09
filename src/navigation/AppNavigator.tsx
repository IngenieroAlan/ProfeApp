import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

import Dashboard from '../screens/Dashboard';
import CalendarScreen from '../screens/CalendarScreen';
import AgendaScreen from '../screens/AgendaScreen';
import ClientsScreen from '../screens/ClientsScreen';
import UniversityScreen from '../screens/UniversityScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof MaterialCommunityIcons.glyphMap = 'help-circle';

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Calendario') {
            iconName = focused ? 'calendar-month' : 'calendar-month-outline';
          } else if (route.name === 'Agenda') {
            iconName = focused ? 'view-agenda' : 'view-agenda-outline';
          } else if (route.name === 'Clientes') {
            iconName = focused ? 'account-group' : 'account-group-outline';
          } else if (route.name === 'Universidad') {
            iconName = focused ? 'book-open-variant' : 'book-open-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.surface,
      })}
    >
      <Tab.Screen name="Inicio" component={Dashboard} />
      <Tab.Screen name="Calendario" component={CalendarScreen} />
      <Tab.Screen name="Agenda" component={AgendaScreen} />
      <Tab.Screen name="Clientes" component={ClientsScreen} />
      <Tab.Screen name="Universidad" component={UniversityScreen} />
    </Tab.Navigator>
  );
}

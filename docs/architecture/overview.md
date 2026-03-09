# Resumen de Arquitectura de ProfeApp

**ProfeApp** es una aplicación móvil desarrollada usando el ecosistema de **React Native y Expo**. 

## Stack Tecnológico 
- **Framework:** React Native + Expo (v55+)
- **Lenguaje:** TypeScript (Estricto)
- **Navegación:** React Navigation v7 (Bottom Tabs)
- **UI & Estilos:** React Native Paper v5
- **Base de Datos Local:** WatermelonDB (SQLite bajo techo)
- **Utilidades:** Dayjs (Fechas), React Native Calendars (Agenda Mensual)

## Estructura de Directorios

El código principal reside en `src/`:

- `/components`: Componentes de UI puramente presentacionales y reutilizables (Ej. `LessonCard`).
- `/screens`: Componentes que representan rutas o pantallas completas de la aplicación de la navegación (Ej. `Dashboard`, `CalendarScreen`).
- `/navigation`: Configuración y declaración de contenedores de rutas (Ej. `AppNavigator.tsx`).
- `/database`: Configuración inicial de variables de BD, esquemas y clases de Modelos (WatermelonDB).
- `/theme`: Configuración e inyección del esquema de colores para React Native Paper.
- `/utils`: Funciones helper o lógica pura exportable.

## Principios de la Arquitectura
1. **Separation of Concerns:** Componentes puramente visuales no deben tener lógica directa con BD en medida de lo posible sin un Hook. 
2. **Offline-First:** Se asume que toda la operación de creación, actualización y eliminación se hace contra el adaptador de SQLite local, por lo tanto todo es veloz asíncronamente.
3. **Escalabilidad:** Definiremos indexación modular. Las pantallas están expuestas de una forma escalable.

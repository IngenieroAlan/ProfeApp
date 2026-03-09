# ProfeApp 🎓

ProfeApp es una aplicación móvil diseñada específicamente para profesores que imparten clases en universidades y también ofrecen clases particulares. Actúa como el asistente diario definitivo para visualizar, gestionar y programar eventos académicos con una interfaz intuitiva con temática "matemática".

## ✨ Características Principales

*   **Resumen Diario (Dashboard):** Visualiza rápidamente todas tus clases programadas para el día de hoy, diferenciando visualmente las clases universitarias de las particulares.
*   **Gestor de Clientes Particulares:** Directorio dedicado para registrar a tus alumnos privados, incluyendo datos de contacto, nivel académico y costo por sesión.
*   **Control de Clases Universitarias:** Registra las materias que impartes en universidades, horarios, ubicación y detalles del grupo.
*   **Calendario Mensual Interactivo:** Explora tu agenda con una vista de calendario, identificando los días con actividad mediante marcadores visuales.
*   **Agenda Cronológica:** Una lista detallada de tus próximas clases ordenadas cronológicamente para no perder ningún detalle.
*   **Diseño Minimalista "Matemático":** Una interfaz limpia, inspirada en ciencia exacta (usando React Native Paper), optimizada para una fácil lectura sin saturación visual.

## 🛠 Pila Tecnológica

La aplicación está construida sobre tecnologías modernas y escalables:

*   **Framework:** [React Native](https://reactnative.dev/) (usando [Expo](https://expo.dev/) versión 55+)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Estricto para seguridad de tipos integral)
*   **Navegación:** [React Navigation v7](https://reactnavigation.org/) (Bottom Tabs fluida)
*   **Interfaz Gráfica:** [React Native Paper v5](https://callstack.github.io/react-native-paper/) (Material Design adaptado)
*   **Base de Datos / Persistencia:** [WatermelonDB](https://watermelondb.dev/) (Arquitectura Offline-First con adaptador SQLite ultrarrápido)
*   **Manejo de Fechas:** [Day.js](https://day.js.org/)
*   **Componentes de Calendario:** [React Native Calendars](https://github.com/wix/react-native-calendars)

## 🚀 Instalación y Ejecución

Sigue estos pasos para correr el proyecto localmente en tu entorno de desarrollo.

### Prerrequisitos
Asegúrate de tener instalados:
- [Node.js](https://nodejs.org/) (preferiblemente versión LTS)
- Un emulador (Android Studio) o simulador (Xcode para macOS) configurado, o un dispositivo físico con Expo Go.
- (Opcional pero recomendado para WatermelonDB en emuladores) Cocoapods para iOS.

### Pasos

1. **Clonar el repositorio y entrar al directorio:**
   ```bash
   cd ProfeApp
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo de Expo:**
   Abre una terminal y ejecuta:
   ```bash
   npx expo start
   ```

4. **Abrir la app:**
   - Presiona `i` para abrir en el simulador de iOS.
   - Presiona `a` para abrir en un emulador de Android.
   - Escanea el código QR usando la aplicación de la cámara en iOS o Expo Go en Android.

> **Nota sobre WatermelonDB:** Dado que WatermelonDB es un módulo pre-construido de manera nativa (SQLite), la aplicación ya está acoplada al `@morrowdigital/watermelondb-expo-plugin` para gestionar perfiles JSI en `app.json`. Si te encuentras con problemas al usar la aplicación corriente pre-compilada de Expo Go (debido a incompatibilidades C++ de WatermelonDB en Expo Go puro), se recomienda encarecidamente levantar el proyecto con Continuous Native Generation (CNG) construyendo un *Custom Dev Client*:
> ```bash
> npx expo run:ios
> # o
> npx expo run:android
> ```

## 📚 Documentación para Agentes / Desarrolladores

Si eres un desarrollador, o una Inteligencia Artificial encargada de añadir características o evolucionar la base de código de **ProfeApp**, revisa obligatoriamente la documentación situada en el directorio principal `/docs`. 

*Comienza por el archivo índice principal:*
- 👉 **[AGENTS.md](./docs/AGENTS.md)**

Allí encontrarás todo sobre la arquitectura, las directrices a la hora de manipular la UI y la forma en que los esquemas de bases de datos interactúan.

---

*ProfeApp: El asistente ideal para profesores organizados.*
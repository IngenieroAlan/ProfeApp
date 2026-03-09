# Gestión de Clases, Eventos y Agenda

## Flujo de Trabajo
Un `LessonEvent` es la abstracción conceptual de "el tiempo que uso enseñando algo hoy". Una Materia de la universidad se da de alta independientemente como `UniversityClass`, y luego la usuaria genera `LessonEvent` atados a esa Materia en el día y horario que corran.

## Consideraciones en Consultas de Pantalla

### Dashboard / Vista de Hoy
Se debe utilizar siempre un query enfocado únicamente a la fecha en turno usando el `dayjs().format('YYYY-MM-DD')` contra la propiedad de índice `date` de la DB optimizando enormemente la renderización.

### Calendario Mensual
Se usará la libería local `react-native-calendars`. El payload de retorno debe pre-formatear y agrupar los eventos devolviendo un objeto indexado por llaves string de fechas para inyectar al `markedDates` con distintivos visuales si el día cuenta con una clase Universitaria (`theme.primary`) o Particular (`theme.secondary`).

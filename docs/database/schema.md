# Esquema de Base de Datos y Modelos

El esquema base se define en `src/database/schema.ts` y se encuentra en su **versión 1**.

## Tablas Principales

### `clients`
- `name` (string)
- `phone` (string)
- `grade` (string, opcional)
- `session_cost` (number)

### `university_classes`
- `subject` (string)
- `university_name` (string)
- `classroom` (string, opcional)
- `student_count` (number, opcional)
- `notes` (string, opcional)

### `lesson_events`
Asiento principal en la línea de tiempo. Representa una sesión que ocurrirá entre horas en una fecha.
- `title` (string)
- `type` (string enum: 'university' | 'private')
- `start_time` (number/timestamp)
- `end_time` (number/timestamp)
- `date` (string de índice para consultas tipo `'2026-03-08'`)
- `university_class_id` (string id fk ref)

### `lesson_clients` (Tabla Pivot)
Sirve para vincular clientes particulares con eventos de clase del tipo 'private'. Ya que puede haber clases particulares grupales.
- `lesson_event_id`
- `client_id`

## Relaciones

- `university_classes`  `1:N` sobre `lesson_events`.
- `clients` y `lesson_events`  presentan una tabla intersección `N:N` mediante `lesson_clients`.

import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'clients',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'grade', type: 'string', isOptional: true },
        { name: 'session_cost', type: 'number' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
    tableSchema({
      name: 'university_classes',
      columns: [
        { name: 'subject', type: 'string' },
        { name: 'university_name', type: 'string' },
        { name: 'classroom', type: 'string', isOptional: true },
        { name: 'student_count', type: 'number', isOptional: true },
        { name: 'notes', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
    tableSchema({
      name: 'lesson_events',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'type', type: 'string' }, // 'university' | 'private'
        { name: 'start_time', type: 'number' },
        { name: 'end_time', type: 'number' },
        { name: 'date', type: 'string' }, // 'YYYY-MM-DD'
        { name: 'university_class_id', type: 'string', isIndexed: true, isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
    tableSchema({
      name: 'lesson_clients',
      columns: [
        { name: 'lesson_event_id', type: 'string', isIndexed: true },
        { name: 'client_id', type: 'string', isIndexed: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
  ]
})

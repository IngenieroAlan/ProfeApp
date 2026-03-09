import { Model } from '@nozbe/watermelondb'
import { date, readonly, relation } from '@nozbe/watermelondb/decorators'

export default class LessonClient extends Model {
  static table = 'lesson_clients'
  static associations = {
    lesson_events: { type: 'belongs_to', key: 'lesson_event_id' },
    clients: { type: 'belongs_to', key: 'client_id' },
  } as const

  @relation('lesson_events', 'lesson_event_id') lessonEvent!: any
  @relation('clients', 'client_id') client!: any

  @readonly @date('created_at') createdAt!: number
  @readonly @date('updated_at') updatedAt!: number
}

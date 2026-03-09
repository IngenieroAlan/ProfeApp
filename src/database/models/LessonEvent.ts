import { Model } from '@nozbe/watermelondb'
import { field, date, readonly, children, relation } from '@nozbe/watermelondb/decorators'

export default class LessonEvent extends Model {
  static table = 'lesson_events'
  static associations = {
    lesson_clients: { type: 'has_many', foreignKey: 'lesson_event_id' },
    university_classes: { type: 'belongs_to', key: 'university_class_id' },
  } as const

  @field('title') title!: string
  @field('type') type!: 'university' | 'private'
  @date('start_time') startTime!: Date
  @date('end_time') endTime!: Date
  @field('date') date!: string

  @relation('university_classes', 'university_class_id') universityClass!: any

  @readonly @date('created_at') createdAt!: number
  @readonly @date('updated_at') updatedAt!: number

  @children('lesson_clients') lessonClients!: any
}

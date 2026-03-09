import { Model } from '@nozbe/watermelondb'
import { field, date, readonly, children } from '@nozbe/watermelondb/decorators'

export default class UniversityClass extends Model {
  static table = 'university_classes'
  static associations = {
    lesson_events: { type: 'has_many', foreignKey: 'university_class_id' },
  } as const

  @field('subject') subject!: string
  @field('university_name') universityName!: string
  @field('classroom') classroom?: string
  @field('student_count') studentCount?: number
  @field('notes') notes?: string

  @readonly @date('created_at') createdAt!: number
  @readonly @date('updated_at') updatedAt!: number

  @children('lesson_events') lessonEvents!: any
}

import { Model } from '@nozbe/watermelondb'
import { field, date, readonly, children } from '@nozbe/watermelondb/decorators'

export default class Client extends Model {
  static table = 'clients'
  static associations = {
    lesson_clients: { type: 'has_many', foreignKey: 'client_id' },
  } as const

  @field('name') name!: string
  @field('phone') phone!: string
  @field('grade') grade?: string
  @field('session_cost') sessionCost!: number
  
  @readonly @date('created_at') createdAt!: number
  @readonly @date('updated_at') updatedAt!: number

  @children('lesson_clients') lessonClients!: any
}

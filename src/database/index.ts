import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { schema } from './schema'
import Client from './models/Client'
import UniversityClass from './models/UniversityClass'
import LessonEvent from './models/LessonEvent'
import LessonClient from './models/LessonClient'

const adapter = new SQLiteAdapter({
  schema,
  jsi: false, // JSI can be enabled later if Expo Dev Client is used and correctly configured
  onSetUpError: error => {
    // Database failed to load
    console.log("WatermelonDB initialize error:", error)
  }
})

export const database = new Database({
  adapter,
  modelClasses: [
    Client,
    UniversityClass,
    LessonEvent,
    LessonClient,
  ],
})

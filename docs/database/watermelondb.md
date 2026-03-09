# Base de Datos Local: WatermelonDB

**ProfeApp** confía en `@nozbe/watermelondb` como la capa completa para persistencia de datos. Elegido sobre Async Storage por su manejo de relaciones, escalabilidad, observables de rendimiento en colecciones masivas de registros.

## Configuración y Setup 

### Exposición Babel
La aplicación requiere usar transpilación experimental. Modificamos `tsconfig.json` y `babel.config.js` introduciendo `@babel/plugin-proposal-decorators` permitiendo la sintaxis `@field` sobre las clases puras para el tipado a nivel Modelo.

### Expo Plugin
Dado que WatermelonDB expone módulos JSI nativos, en el framework unmanaged `Expo Go` podría haber limitaciones profundas de compatibilidad si hay desajustes. Utilizamos el community plugin `@morrowdigital/watermelondb-expo-plugin` el cual abstrae la carga e inicialización de SQLite dentro de las directivas prebuild automáticas.

## Patrón de Uso
Para acceder a la base de datos se debe importar el sigleton global en el índice principal de la DB.

```typescript
import { database } from '../database';
// Leer:
const collections = await database.get('clients').query().fetch();
// Escribir:
await database.write(async () => {
    await database.get('clients').create(record => {
        // mutations..
    })
})
```

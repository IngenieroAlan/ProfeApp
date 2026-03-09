# Instrucciones de IA (Agent System Context)

Este documento dota a los agentes (AI Assistants) de un framework referencial al momento de modificar el repositorio o crear nuevos flujos.

## Reglas de Comportamiento 🤖

1. **Usa de inmediato TypeScript:** Todo nuevo archivo funcional creado **debe** estar fuertemente tipado en un `.ts` o `.tsx` de forma estricta. Ningún archivo con extensión `.js` o tipado en capa de lógica ambigua está permitido.
2. **Prioriza React Native Paper:** Si necesitas botones, modales, listas iterables, o inputs de texto, usa siempre por defecto las de la librería `react-native-paper` usando `import { Element } from 'react-native-paper'`. No emplees los de un paquete básico `react-native` (a menos de ser contenedores vacíos como View o Text limitados).
3. **Capa Decoradora en Modelos:** Toda extensión con nueva propiedad en un modelo en WatermelonDB requiere añadir la nueva columna al esquema *primero*, incrementar la `version` schema o purgarla para pruebas de desarrollo, y luego referirla en el modelo `.ts` adjuntando el wrapper decorador específico (`@field`, `@date`, etc). **Nunca** creas el schema sin la interfaz.
4. **Imports de Archivos Locales:** Evita anidar muchos niveles y utiliza rutas relativas coherentes como `../components/` o `../../database/`.

> [!WARNING]
> La falta de apego a estas reglas implicará builds de tipeo quebrados. Si el Agente IA efectúa modificaciones sin validación (`npx tsc --noEmit`), la regresión es su responsabilidad integral.

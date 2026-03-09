# Gestión de Clientes para Clases Particulares

La vista de **Clientes** debe tratar como un CRUD amigable e intuitivo.

- **Datos de ingreso:** Como mínimo Nombre y Teléfono. El Grado de Estudio es auxiliar para clasificación. El "Coste por Sesión" (`sessionCost`) permite reportes financieros a futuro.
- Al generar una nueva clase *Particular* (`type: 'private'`), el selector debería permitir agregar IDs correspondientes y crear instancias transparentes en `lesson_clients`.

## Operaciones críticas
Para eliminar un cliente se deben eliminar en cascada sus `lesson_clients` adjuntos por salud en la normalización de la DB.

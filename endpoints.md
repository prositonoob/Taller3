# Inventario de Endpoints - API de Gestión de Usuarios

## Descripción del Proyecto
Esta API REST permite gestionar usuarios sin persistencia (almacenamiento en memoria). Está desarrollada en Node.js con TypeScript y no requiere autenticación.

## Tabla de Endpoints

| Método | Ruta | Params | Body (Request) | Response | Descripción | Seguridad |
|--------|------|--------|----------------|----------|-------------|-----------|
| GET | /users | N/A | N/A | 200: User[] | Obtiene lista de usuarios. | No |
| GET | /users/:id | path: id: string | N/A | 200: User<br>404: { error: "Usuario no encontrado" } | Obtiene detalles de un usuario específico por ID. | No |
| POST | /users | N/A | { nombre: string, apellido: string, telefono: string, email: string, edad: number } | 201: User<br>400: { error: "Datos inválidos" } | Crea un nuevo usuario. Todos los campos requeridos. | No |
| PUT | /users/:id | path: id: string | { nombre: string, apellido: string, telefono: string, email: string, edad: number } | 200: User<br>404: { error: "Usuario no encontrado" }<br>400: { error: "Datos inválidos" } | Actualiza completamente un usuario existente. Todos los campos requeridos. | No |
| PATCH | /users/:id | path: id: string | Partial<{ nombre?: string, apellido?: string, telefono?: string, email?: string, edad?: number }> | 200: User<br>404: { error: "Usuario no encontrado" } | Actualiza parcialmente un usuario. Solo campos proporcionados. | No |
| DELETE | /users/:id | path: id: string | N/A | 200: { message: "Usuario eliminado" }<br>404: { error: "Usuario no encontrado" } | Elimina un usuario por ID. | No |

## Modelo de Datos (User)
```typescript
interface User {
  id: string;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  edad: number;
}
```

## Validaciones y Reglas
- Todos los campos son requeridos para crear y actualizar completamente
- IDs son strings únicos generados automáticamente
- Errores comunes: Campos faltantes, usuario no encontrado

## Notas
- Todos los endpoints están implementados en la versión actual
- El servidor corre en el puerto 3000
- Datos se almacenan en memoria y se pierden al reiniciar el servidor
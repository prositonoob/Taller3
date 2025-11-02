# API de Gestión de Usuarios

API REST desarrollada en Node.js con TypeScript para gestionar usuarios sin persistencia (almacenamiento en memoria).

## Características

- ✅ Desarrollada en **TypeScript** con tipado fuerte
- ✅ **6 endpoints** completamente implementados
- ✅ Almacenamiento en **memoria RAM** (sin base de datos)
- ✅ **Sin autenticación** requerida
- ✅ Validaciones básicas y manejo de errores
- ✅ Puerto **3000**
- ✅ Colección de Postman incluida

## Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm

### Instalación
```bash
npm install
```

### Ejecución en modo desarrollo
```bash
npm run dev:watch
```

### Compilación y ejecución en producción
```bash
npm run build
npm start
```

### Scripts disponibles
- `npm run build` - Compila TypeScript a JavaScript
- `npm run dev:watch` - Ejecuta en modo desarrollo con recarga automática
- `npm start` - Ejecuta la versión compilada
- `npm test` - Ejecuta las pruebas (Jest)

## Endpoints Implementados

Todos los endpoints están implementados y funcionan correctamente:

### 1. GET /users
Obtiene lista de usuarios.

**Ejemplo:**
```bash
curl http://localhost:3000/users
```

### 2. GET /users/:id
Obtiene detalles de un usuario específico.

**Ejemplo:**
```bash
curl http://localhost:3000/users/1
```

### 3. POST /users
Crea un nuevo usuario.

**Body requerido:**
```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "telefono": "+57 300 123 4567",
  "email": "juan.perez@example.com",
  "edad": 30
}
```

**Ejemplo:**
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan", "apellido": "Pérez", "telefono": "+57 300 123 4567", "email": "juan.perez@example.com", "edad": 30}'
```

### 4. PUT /users/:id
Actualiza completamente un usuario (todos los campos requeridos).

**Ejemplo:**
```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan Carlos", "apellido": "Pérez García", "telefono": "+57 300 987 6543", "email": "juancarlos.perez@example.com", "edad": 31}'
```

### 5. PATCH /users/:id
Actualiza parcialmente un usuario (solo campos proporcionados).

**Ejemplo:**
```bash
curl -X PATCH http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"telefono": "+57 301 555 1234", "edad": 32}'
```

### 6. DELETE /users/:id
Elimina un usuario.

**Ejemplo:**
```bash
curl -X DELETE http://localhost:3000/users/1
```

## Validaciones

- **nombre**: String no vacío, máximo 50 caracteres
- **apellido**: String no vacío, máximo 50 caracteres
- **telefono**: String con formato válido de teléfono (7-15 dígitos, permite espacios, guiones, paréntesis, prefijos como +57)
- **email**: String con formato válido de email
- **edad**: Número entero entre 0 y 150

## Modelo de Datos

```typescript
interface User {
  id: string;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  edad: number;
  createdAt: string;
  updatedAt: string;
}
```

## Colección de Postman

Importa el archivo `postman_collection.json` en Postman para probar todos los endpoints con ejemplos preconfigurados.

## Arquitectura del Proyecto

```
mi-servidor/
├── src/
│   ├── server.ts      # Servidor principal con todos los endpoints
│   └── types.ts       # Definiciones de tipos TypeScript
├── endpoints.md       # Documentación completa de endpoints
├── postman_collection.json  # Colección para Postman
├── package.json
├── tsconfig.json
└── README.md
```

## Notas Importantes

- Los datos se almacenan únicamente en memoria RAM
- Al reiniciar el servidor, todos los datos se pierden
- No requiere autenticación ni tokens
- Servidor corre en el puerto 3000
- Compatible con la guía del Taller 3

## Dependencias

- **express**: Framework web para Node.js
- **typescript**: Compilador TypeScript
- **@types/node** y **@types/express**: Tipos para desarrollo
- **ts-node**: Ejecutor de TypeScript para desarrollo
- **nodemon**: Recarga automática en desarrollo
- **jest**: Framework de testing (configurado pero no implementado)

---

**Proyecto desarrollado para el Taller 3: Inventario de Endpoints + API en Node/TypeScript**
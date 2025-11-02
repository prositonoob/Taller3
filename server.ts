import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// In-memory storage
let users: any[] = [];
let nextUserId = 1;

// Utility functions
function generateId(): string {
  return (nextUserId++).toString();
}

function validateCreateUser(data: any): boolean {
  return data.nombre && data.apellido && data.telefono && data.email && typeof data.edad === 'number';
}

// Routes

// GET /users - Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET /users/:id - Get user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(user);
});

// POST /users - Create new user
app.post('/users', (req, res) => {
  if (!validateCreateUser(req.body)) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }

  const newUser = {
    id: generateId(),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    email: req.body.email,
    edad: req.body.edad
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id - Update user completely
app.put('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.params.id);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  if (!validateCreateUser(req.body)) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }

  users[userIndex] = {
    id: req.params.id,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    email: req.body.email,
    edad: req.body.edad
  };

  res.json(users[userIndex]);
});

// PATCH /users/:id - Update user partially
app.patch('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.params.id);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const user = users[userIndex];
  if (req.body.nombre) user.nombre = req.body.nombre;
  if (req.body.apellido) user.apellido = req.body.apellido;
  if (req.body.telefono) user.telefono = req.body.telefono;
  if (req.body.email) user.email = req.body.email;
  if (req.body.edad) user.edad = req.body.edad;

  res.json(user);
});

// DELETE /users/:id - Delete user
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.params.id);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  users.splice(userIndex, 1);
  res.json({ message: 'Usuario eliminado' });
});

// Health check
app.get('/', (req, res) => {
  res.send('API de Gestión de Usuarios corriendo');
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
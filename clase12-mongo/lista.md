<!-- base de dato -->

- show dbs

- use miPrimeraBase

- db.createCollection('usuarios)

- db.usuarios.insertOne({ name: 'Fede',  last_name: 'Osandón', age: 30, email: 'f@gmail.com'}).

- db.usuarios.find()

<!-- Ejemplo de ejercicio uno -->
- use estudiantes
- show dbs
- db.createCollection("estudiantes")
- show collections
- db.estudiantes.insertMany([
  {
    nombre: "Juan",
    apellido: "Pérez",
    curso: "Matemáticas",
    correo: "juan.perez@ejemplo.com",
    gender: "M"
  },
  {
    nombre: "María",
    apellido: "García",
    curso: "Historia",
    correo: "maria.garcia@ejemplo.com",
    gender: "F"
  },
  {
    nombre: "Pedro",
    apellido: "Sánchez",
    curso: "Física",
    correo: "pedro.sanchez@ejemplo.com",
    gender: "M"
  },
  {
    nombre: "Ana",
    apellido: "Martínez",
    curso: "Literatura",
    correo: "ana.martinez@ejemplo.com",
    gender: "F"
  },
  {
    nombre: "Luis",
    apellido: "Rodríguez",
    curso: "Química",
    correo: "luis.rodriguez@ejemplo.com",
    gender: "M"
  }
])
- db.estudiantes.find()



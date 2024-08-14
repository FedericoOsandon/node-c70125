Sobre la base y los datos cargados anteriormente
Insertar cinco documentos más en la colección estudiantes con los siguientes datos:
{ "nombre" : "Pablo", "edad" : 25 }
{ "nombre" : "Juan", "edad" : 22 }
{ "nombre" : "Lucia", "edad" : 25 }
{ "nombre" : "Juan", "edad" : 29 }
{ "nombre" : "Fede", "edad" : 35 }

Listar todos los documentos de la colección estudiantes ordenados por edad descendente.
Listar el cliente más joven.
Listar el segundo cliente más joven.
Listar los estudiantes llamados 'Juan'
Listar los estudiantes llamados 'Juan' que tengan 29 años.
Listar los estudiantes llamados 'Juan' ó 'Lucia'.
Listar los estudiantes que tengan más de 25 años.
Listar los estudiantes que tengan 25 años ó menos.
Listar los estudiantes que NO tengan 25 años.
Listar los estudiantes que estén entre los 26 y 35 años.
Actualizar la edad de Fede a 36 años, listando y verificando que no aparezca en el último listado.
Actualizar todas las edades de 25 años a 26 años, listando y verificando que aparezcan en el último listado.
Borrar los estudiantes que se llamen 'Juan' y listar verificando el resultado.
Eliminar además todos los documentos de estudiantes que hayan quedado con algún valor.

- db.estudiantes.insertOne({"nombre" : "Pablo", "edad" : 25})
- db.estudiantes.insertOne({"nombre" : "Juan", "edad" : 22});
- db.estudiantes.insertOne({"nombre" : "Lucia", "edad" : 25});
- db.estudiantes.insertOne({"nombre" : "Juan", "edad" : 29});
- db.estudiantes.insertOne({"nombre" : "Fede", "edad" : 35});

<!-- Para listar todos los documentos de la colección "estudiantes" ordenados por edad descendente: -->
- db.estudiantes.find().sort({edad: -1})

<!-- Para listar el cliente más joven: -->
- db.estudiantes.find().sort({edad: 1}).limit(1);

<!-- Para listar el segundo cliente más joven: -->
- db.estudiantes.find().sort({edad: 1}).limit(2).skip(1)

<!-- Para listar los estudiantes llamados 'Juan': -->
- db.estudiantes.find({"nombre": "Juan"});

Para listar los estudiantes llamados 'Juan' que tengan 29 años:
- db.estudiantes.find({"nombre": "Juan", "edad": 29});

<!-- Para listar los estudiantes llamados 'Juan' ó 'Lucia': -->
- db.estudiantes.find({$or: [{"nombre": "Juan"}, {"nombre": "Lucia"}]});

<!-- Para listar los estudiantes que tengan más de 25 años: -->
- db.estudiantes.find({"edad": {$gt: 25}});

<!-- Para listar los estudiantes que tengan 25 años ó menos: -->
- db.estudiantes.find({"edad": {$lte: 25}});

<!-- Para listar los estudiantes que NO tengan 25 años: -->
- db.estudiantes.find({"edad": {$ne: 25}});

<!-- Para listar los estudiantes que estén entre los 26 y 35 años: -->
- db.estudiantes.find({"edad": {$gt: 25, $lt: 36}});

<!-- Para actualizar la edad de Fede a 36 años: -->
- db.estudiantes.updateOne({"nombre": "Fede"}, {$set: {"edad": 36}})
- db.estudiantes.find({edad: {$gt: 25, $lt: 36}})

<!-- Actualizar todas las edades de 25 años a 26 años, listando y verificando que aparezcan en el último listado: -->
- db.estudiantes.updateMany({edad: 25}, {$inc: {edad: 1}})
- db.estudiantes.find({edad: {$gt: 25, $lt: 36}})

<!-- Borrar los estudiantes que se llamen 'Juan' y listar verificando el resultado: -->
- db.estudiantes.deleteMany({nombre: "Juan"})
- db.estudiantes.find()

<!-- Eliminar además todos los documentos de estudiantes que hayan quedado con algún valor: -->
- db.estudiantes.deleteMany({})
- db.estudiantes.find()

db.estudiantes.insertMany([{"nombre" : "Pablo", "edad" : 25},{"nombre" : "Juan", "edad" : 22},{"nombre" : "Lucia", "edad" : 25},{"nombre" : "Juan", "edad" : 29},{"nombre" : "Fede", "edad" : 35}])


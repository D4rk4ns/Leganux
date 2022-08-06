const   express = require('express'),
        StudentController = require('../controller/studentController');
        api = express.Router();

//===================================================
//Obtener todos los Estudiantes
//===================================================
api.get('/student/', StudentController.obtenerEstudiantes);

//===================================================
//Obtener Estudiante
//===================================================
api.get('/student/:id', StudentController.obtenerEstudiante); 

//===================================================
//Añadir un nuevo Estudiante
//===================================================
api.post('/student/', StudentController.crearEstudiante);

//===================================================
//Actualizar un Estudiante
//===================================================
api.put('/student/:id', StudentController.actualizarEstudiante);

//===================================================
//Eliminar un Estudiante
//===================================================
api.delete('/student/:id', StudentController.eliminarEstudiante);

module.exports = api;
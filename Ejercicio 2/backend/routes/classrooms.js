const   express = require('express'),
        ClassRoomController = require('../controller/classroomController');
        api = express.Router();

//===================================================
//Obtener todas las Clases
//===================================================
api.get('/classroom/', ClassRoomController.obtenerClases);

//===================================================
//Obtener Clase
//===================================================
api.get('/classroom/:id', ClassRoomController.obtenerClase); 

//===================================================
//Añadir una nueva Clase
//===================================================
api.post('/classroom/', ClassRoomController.crearClase);

//===================================================
//Actualizar una Clase
//===================================================
api.put('/classroom/:id', ClassRoomController.actualizarClase);

//===================================================
//Eliminar una Clase
//===================================================
api.delete('/classroom/:id', ClassRoomController.eliminarClase);

module.exports = api;
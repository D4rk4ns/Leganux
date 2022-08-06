'use strict';

const ClassRoom = require('../models/classroom');


//===================================================
//Obtener todas las Clases
//===================================================

function obtenerClases(req, res) {

    ClassRoom.find({})
        .populate('students', '-active -_id')

    .exec(
        (err, classroom) => {

            if (err) {
                return res.status(400).json({
                    mensaje: 'Error cargando la clase',
                    errors: err.message
                });
            }

            res.status(200).json({
                classroom: classroom
            });
            
        });
}


//===================================================
//Obtener una clase
//===================================================

function obtenerClase(req, res) {

    let body = req.params;


    ClassRoom.find({ '_id': body.id})
        .populate('students', '-active -_id')

    .exec(
        (err, classroom) => {

            if (err) {
                return res.status(400).json({
                    mensaje: 'Error cargando la clase',
                    errors: err.message
                });
            }

            res.status(200).json({
                classroom: classroom
            });
        });
}


//===================================================
//Crear una nueva Clase
//===================================================
function crearClase(req, res) {

    const body = req.body,
        Classroom = new ClassRoom({

            Class: body.Class,
            Order: body.Order,
            numberOfStudents: body.numberOfStudents,
            active: body.active,
            students: body.students,
        });

        Classroom.save((err, savedClassRoom) => {
            if (err) {
                return res.status(400).json({
                    mensaje: 'Error al crear la Clase',
                    errors: err.message

                });
            }
            res.status(201).json({
                classroom: savedClassRoom
            });
        });
}


//===================================================
//Actualizar una Clase
//===================================================
function actualizarClase(req, res) {

    const id = req.params.id,
        body = req.body;

    ClassRoom.findById(id, (err, classroom) => {

        if (err) {
            return res.status(500).json({
                mensaje: 'Error al buscar la clase',
                errors: err.message

            });
        }

        if (!classroom) {
            return res.status(400).json({
                mensaje: 'La clase con el id ' + id + ' no existe',
                errors: { message: 'No existe una clase con ese ID' }
            });
        }

        classroom.Class           = body.Class              || classroom.Class;
        classroom.Order            = body.Order             || classroom.Order;
        classroom.numberOfStudents = body.numberOfStudents  || classroom.numberOfStudents;
        classroom.active           = body.active            || classroom.active;

        if(body.students){
                
            if(classroom.students.length == 0)
                classroom.students.push(body.students);
            else{
                
                for(let i =0; i < classroom.students.length; i++){
                    if (classroom.students[i] == body.students) {
                        return res.status(400).json({
                            mensaje: 'El usuario que desea agregar ya existe',
                            errors: 'El usuario que desea agregar ya existe'
                        });
                    }
                }
                classroom.students.push(body.students);
                }
        }

        classroom.save((err, savedClassRoom) => {
            if (err) {
                return res.status(400).json({
                    mensaje: 'Error al actualizar la clase',
                    errors: err

                });
            }

            res.status(200).json({
                classroom: savedClassRoom
            });
        });

    });
}

//===================================================
//Eliminar una Clase
//===================================================
function eliminarClase(req, res) {
    const id = req.params.id;

    ClassRoom.findByIdAndRemove(id, (err, deletedClassRoom) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al borrar la clase',
                errors: err.message

            });
        }

        if (!deletedClassRoom) {
            return res.status(400).json({
                mensaje: 'No existe una clase con ese ID',
                errors: { message: 'No existe una clase con ese ID' }
            });
        }

        res.status(200).json({
            classroom: deletedClassRoom
        });
    });

}

module.exports = {
    obtenerClases,
    obtenerClase,
    crearClase,
    actualizarClase,
    eliminarClase
};
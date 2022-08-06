'use strict';

const   Student = require('../models/student');


//===================================================
//Obtener todos los Estudiantes
//===================================================

function obtenerEstudiantes(req, res) {

    Student.find({})
    .exec(
        (err, student) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error cargando estudiante',
                    errors: err
                });
            }

            res.status(200).json({
                student: student
            });

        });
}


//===================================================
//Obtener un Estudiante
//===================================================

function obtenerEstudiante(req, res) {

    let body = req.params;

    Student.find({'_id': body.id})
    .exec(
        (err, student) => {

            if (err) {
                return res.status(500).json({
                    mensaje: 'Error cargando estudiante',
                    errors: err.message
                });
            }

            res.status(200).json({
                student: student,
            });

        });
}


//===================================================
//Crear un nuevo Estudiante
//===================================================
function crearEstudiante(req, res) {
    const   body = req.body,

            student = new Student({

                name: body.name,
                age: body.age,
                active: body.active
            });

            student.save((err, savedStudent) => {
                if (err) {
                    return res.status(400).json({
                        mensaje: 'Error al añadir el estudiante',
                        errors: err.message

                    });
                }
                res.status(201).json({
                    student: savedStudent
                });
    });
}


//===================================================
//Actualizar un Estudiante
//===================================================
function actualizarEstudiante(req, res) {

    const id = req.params.id,
        body = req.body;

    Student.findById(id, (err, student) => {

        if (err) {
            return res.status(500).json({
                mensaje: 'Error al buscar el estudiante',
                errors: err.message

            });
        }

        if (!student) {
            return res.status(400).json({
                mensaje: 'El estudiante con el id ' + id + ' no existe',
                errors: { message: 'No existe un estudiante con ese ID' }
            });
        }

        student.name = body.name || student.name;
        student.age = body.age || student.age;
        student.active = body.active || student.active;

        student.save((err, savedStudent) => {
            if (err) {
                return res.status(400).json({
                    mensaje: 'Error al actualizar el estudiante',
                    errors: err.message

                });
            }

            res.status(200).json({
                student: savedStudent
            });
        });

    });
}

//===================================================
//Eliminar un Estudiante
//===================================================
function eliminarEstudiante(req, res) {
    const id = req.params.id;

    Student.findByIdAndRemove(id, (err, deletedStudent) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al borrar el estudiante',
                errors: err.message

            });
        }

        if (!deletedStudent) {
            return res.status(400).json({
                mensaje: 'No existe un estudiante con ese ID',
                errors: { message: 'No existe un estudiante con ese ID' }
            });
        }

        res.status(200).json({
            student: deletedStudent
        });
    });

}

module.exports = {
    obtenerEstudiantes,
    obtenerEstudiante,
    crearEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
};
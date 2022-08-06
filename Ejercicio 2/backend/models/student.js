

const   mongoose        = require('mongoose'),
        Schema          = mongoose.Schema

const studentSchema = new Schema({

name: {type:String, required: [true, 'El nombre del estudiante es obligatorio']},
age: {type:Number, required: [true, 'La edad del estudiante es obligatoria']},
active: {type:Boolean, default: false},

},{collection: 'student'});

module.exports = mongoose.model('Student',studentSchema);

const   mongoose        = require('mongoose'),
        Schema          = mongoose.Schema



const classRoomSchema = new Schema({

Class: {type:String, required: [true, 'La clase es obligatoria']},
Order: {type:Number, required: false},
numberOfStudents: {type: Number, required: [true, 'La cantidad de estudiantes es obligatoria']},
active: {type:Boolean, default: true},
students: [{type: Schema.ObjectId, ref: 'Student'}]



},{collection: 'classroom'});

module.exports = mongoose.model('ClassRoom',classRoomSchema);

/*
Class:string
• Order:number
• numberOfStudents:number
• active:boolean (default true)
• students: (list of referenced students)
*/
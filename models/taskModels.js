const mongoose =  require('mongoose');


//! schemas are case sensitive so be Carefull ! 

//! ONlY THE PROPERTIES YOU SET IN SCEHMA WILL BE PASSED ON TO DATABASE

//! Below Syntax can pass Empty Objects and Empty Strings in the database which is whu=y Validation is necessary 

//? const TaskSchema = new mongoose.Schema({
//?     name:String,Completed:Boolean
//? })


//! To Validate the Schema :  

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,' Must Provide Name '],
        trim:true,
        maxlength:[20, ' Name Cannot Be More than 20 Characters ! ']
    },
    Completed:{
        type:Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task',TaskSchema)
const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please Enter a name']
         },
         email:{
            type:String,
            required:[true,'Please Enter Email'],
            unique:true
         },
         password:{
            type:String,
            required:[true,'Please Enter Password']
         }
    },
    {
        timestamps:true
    })

module.exports = mongoose.model('User',userSchema)
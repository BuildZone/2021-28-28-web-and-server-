const mongoose = require('mongoose')

module.exports =mongoose.model('Admin',{
    title:String,
    firstName:String,
    lastName:String,
    email: String,
    password: String,
    //image:String

})







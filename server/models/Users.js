const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    uname :{
        type: String,
        required:true

    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
    
});
module.exports = Users = mongoose.model('user', UserScheme)
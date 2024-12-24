const mongoose = require('mongoose');
const { create } = require('./user.model');

const blackListTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400  //24hours of time....tokens ttl
    }
});

module.exports = mongoose.model('blackListToken',blackListTokenSchema);
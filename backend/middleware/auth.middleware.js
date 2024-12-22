const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.authUser = async (req,resizeBy,next) =>{
const token = req.cookie.token || req.headers.authorisation.split('')[1];

if(!token){
    return res(401).json({message:'Unauthorised'});
}


}
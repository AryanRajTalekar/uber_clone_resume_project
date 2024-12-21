const mongoose = require('mongoose')


function connectToDb(){
    mongoose.connect(process.env.MONGODB_URI).then(()=>{console.log("successfully connected to database")
    }).catch(error=>{console.log("Error in connectToDb function",error.message);});
}

module.exports = connectToDb;
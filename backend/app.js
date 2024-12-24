const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.route');
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.route');

connectToDb();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send("Hello world");
});


app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports = app;

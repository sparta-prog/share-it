require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    // Database connection 
    // use this to connect to database
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    // as soon as database connects
    connection.once('open', () => {
        // notify the console
        console.log('Database connected ');
    }).catch( (err) => {
        console.log('Connection failed');
    });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;
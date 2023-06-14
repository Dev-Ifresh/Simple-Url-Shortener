//Setting up the Database using mongoose
require ('dotenv').config();
const mongoose = require("mongoose");
const mongodb_uri = process.env.MONGODB_URL



function connectToMongoDB() {
    mongoose.connect(mongodb_uri, 
        {useNewUrlParser: true, useUnifiedTopology: true})

    .then(console.log('MongoDB is connected'))
    .catch((err) => console.log(err));
}
module.exports = { connectToMongoDB }
const mongoose = require('mongoose');
const shortId = require('shortid');



const shortUrlSchema = new mongoose.Schema({  //assign the mongoose.Schema method to a variable named shortUrlSchema

    original: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate //We used the shortId package to generate shortId for every URl
    },
    clicks:{
        type: Number,
        required: true,
        default: 0
    }

})

const urlModel = mongoose.model('url', shortUrlSchema);

module.exports = urlModel
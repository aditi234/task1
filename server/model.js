const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    imageUrl:{
        type: String,
        required: true
    },
    postDate: {
        type: Date,
        default: Date.now
    }
});

const image = mongoose.model('images', imageSchema);

module.exports = image;
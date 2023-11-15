const mongoose = require('mongoose');
const {Schema} = mongoose;

const chooseUsSchema = new Schema({
    title: { type: String, required: true, title: 'Title' },
    image: { type: String, required: true, title: 'Image' },
}, {timestamps: true});

const chooseUs = mongoose.model('chooseUs', chooseUsSchema);

module.exports = chooseUs;

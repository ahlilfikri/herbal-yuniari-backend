const mongoose = require('mongoose');
const {Schema} = mongoose;

const partnerSchema = new Schema({
    title: { type: String, required: true, title: 'Title' },
    image: { type: String, required: true, title: 'Image' },
}, {timestamps: true});

const partner = mongoose.model('partner', partnerSchema);

module.exports = partner;

const mongoose = require('mongoose');
const {Schema} = mongoose;

const produkUnggulanSchema = new Schema({
    title: { type: String, required: true, title: 'Title' },
    image: { type: String, required: true, title: 'Image' },
}, {timestamps: true});

const produkUnggulan = mongoose.model('produkUnggulan', produkUnggulanSchema);

module.exports = produkUnggulan;

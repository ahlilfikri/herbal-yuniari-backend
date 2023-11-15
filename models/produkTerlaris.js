const mongoose = require('mongoose');
const {Schema} = mongoose;

const produkTerlarisSchema = new Schema({
    title: { type: String, required: true, title: 'Title' },
    image: { type: String, required: true, title: 'Image' },
}, {timestamps: true});

const produkTerlaris = mongoose.model('produkTerlaris', produkTerlarisSchema);

module.exports = produkTerlaris;

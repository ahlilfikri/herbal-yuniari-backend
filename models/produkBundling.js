const mongoose = require('mongoose');
const { Schema } = mongoose;

const produkBundlingSchema = new Schema({
    title: { type: String, required: true, title: 'Title' },
    content: { type: [String], required: true, title: 'Content' },
    image: { type: String, required: true, title: 'Image' },
}, { timestamps: true });

const produkBundling = mongoose.model('produkBundling', produkBundlingSchema);

module.exports = produkBundling;

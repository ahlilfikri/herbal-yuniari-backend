const mongoose = require('mongoose');
const {Schema} = mongoose;

const tentangKamiSchema = new Schema({
    visi: { type: String, required: true, title: 'Title' },
    misi: { type: String, required: true, title: 'Content' },
    tentang: { type: String, required: true, title: 'Image' },
}, {timestamps: true});

const tentangKami = mongoose.model('tentangKami', tentangKamiSchema);

module.exports = tentangKami;

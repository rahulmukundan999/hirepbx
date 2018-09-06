const mongoose = require('mongoose');



const WavSchema = mongoose.Schema({
    img: 
    { data: Buffer, contentType: String }
});

const Wav = module.exports = mongoose.model('Wav',WavSchema);
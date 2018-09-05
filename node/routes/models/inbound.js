const mongoose = require('mongoose');



const InboundSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    didnumber:{
        type: String
    },
    playback:{
        type: String
    },
    ringgroup:{
        type: String
    },
    forext:{
        type: String
    },
    formob:{
        type: String
    },
});

const Inbound = module.exports = mongoose.model('Inbound',InboundSchema);
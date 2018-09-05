const mongoose = require('mongoose');



const OutboundSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    dial:{
        type: String,
        default:''
    },
    dialpattern:{
        type: String,
        default:''
    },
    callerid:{
        type: String
    },
    trunk:{
        type: String
    },

});

const Outbound = module.exports = mongoose.model('Outbound',OutboundSchema);
const mongoose = require('mongoose');



const RingSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    extension:{
        type: String
    },
    timeout:{
        type: String
    },
    callerid:{
        type: String
    }

});

const Ring = module.exports = mongoose.model('Ring',RingSchema);
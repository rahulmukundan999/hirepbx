const mongoose = require('mongoose');



const ReceptionistSchema = mongoose.Schema({
    name:{
        type: String,
    },
    extension:{
        type: String
    },
    wav:{
        type: String,
    },
    zero:{
        type:String,
    },
    one:{
        type: String
    },
    two:{
        type: String
    },
    three:{
        type: String
    },
    four:{
        type: String
    },
    five:{
        type: String
    },
    six:{
        type: String
    },
    seven:{
        type: String
    },
    eight:{
        type: String
    },
    nine:{
        type: String
    },
});

const Receptionist = module.exports = mongoose.model('Receptionist',ReceptionistSchema);
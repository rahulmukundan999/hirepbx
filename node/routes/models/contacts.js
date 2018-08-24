const mongoose = require('mongoose');



const ContactSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String
    },
    company:{
        type: String,
        required: true
    },
    mob:{
        type: String
    },
    mob2:{
        type: String
    },
    home:{
        type: String
    },
    home2:{
        type: String
    },
    business:{
        type: String
    },
    business2:{
        type: String
    },
    email:{
        type: String
    },
    other:{
        type: String
    },
    bfax:{
        type: String
    },
    hfax:{
        type: String
    },
    ofax:{
        type: String
    },
});

const Contact = module.exports = mongoose.model('Contact',ContactSchema);
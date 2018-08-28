const mongoose = require('mongoose');



const TrunkSchema = mongoose.Schema({
    trunkname:{
        type: String,
        required: true
    },
    username1:{
        type: String
    },
    password:{
        type: String
    },
    trunkip:{
        type: String
    },
    register:{
        type: Boolean
    },
});

const Trunk = module.exports = mongoose.model('Trunk',TrunkSchema);
const { ObjectID } = require('bson');
const mongoose = require('mongoose'); 
const schema = mongoose.Schema; 

const user = new schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
    },
    games :[
        {
            id : ObjectID,
            name : String, 
            result : number,
            theme : String,
        }
    ]

})

module.exports = mongoose.model('users' , user)
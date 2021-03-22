const mongoose = require('mongoose')
const { ObjectID } = require('mongodb')

const Schema = mongoose.Schema;

const User = new Schema({
    username : {
        type : String,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    games: [
        {
            id : ObjectID,
            label: String,
            theme: String,
            mode: String,
            score : Number,
        }
    ],
    password: {
        type: String,
        required : true,
    }
})
module.exports = mongoose.model('users', User)

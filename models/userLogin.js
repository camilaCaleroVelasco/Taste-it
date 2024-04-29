const mongoose = require('mongoose');
const { unique } = require('next/dist/build/utils');
const { title } = require('process');

const UserLoginSchema = new mongoose.Schema({
    username:{
    type: String,
    required: true,
    unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = UserLogin = mongoose.model('userLogin', UserLoginSchema);
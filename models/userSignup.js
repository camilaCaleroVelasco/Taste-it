const mongoose = require('mongoose');
const { title } = require('process');

const UserSignupSchema = new mongoose.Schema({
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

module.exports = UserSignup = mongoose.model('userSignup', UserSignupSchema);
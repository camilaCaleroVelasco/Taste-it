const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");


const UserLogin = require('../../models/userLogin');
const UserSignup = require('../../models/userSignup');

/*
router.post('/', bodyParser.json(), async(req, res) => {
    try {
        const{username, email, password} = req.body;

        // does the username alreayd exists?
        const exists = await UserSignup.findOne({ $or: [{ username }, { email }] });
        if (exists) {
            return res.status(400).json({error: 'Username or email already exists'});
        }
        // else create a username
        await UserSignup.create({username, email, password});
        res.json({ msg: 'User added successfully'});
    } catch (err) {
        console.err("Error during signup: ", err);
        res.status(500).json({ error: 'Internal server error' });

    }
});

router.post('/', bodyParser.json(), async(req, res) => {
    try {
        const{username, password} = req.body;

        // does the username alreayd exists?
        const exists = await UserLogin.findOne({ username });
        if (!exists) {
            return res.status(400).json({error: 'Username does not exists'});
        }

        // is password correct? 
        const isValid = password === exists.password; 
        if (!isValid){
            return res.status(400).json({error: 'Invalid password'});
        } 

        // everything correct?
        res.json({msg: 'Login Successful', exists});
    } catch (err) {
        console.err("Error during login: ", err);
        res.status(500).json({ error: 'Internal server error' });

    }

});
*/


router.post('/', bodyParser.json(), (req, res) => {
    UserSignup.create(req.body)
        .then((UserSignup) => res.json({msg: 'item added successfully'}))
        .catch((err) => res.status(400).json({error: 'error signing in'}))
})



//export router
module.exports = router;

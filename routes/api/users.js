const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
const bcrypt = require('bcrypt');



const UserLogin = require('../../models/userLogin');
const UserSignup = require('../../models/userSignup');

//export router
module.exports = router;


// @route Get api/items
router.get('/', (req, res) => {
    UserSignup.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ noitemsfound: 'No Users Found'}));
});


router.post('/signup', bodyParser.json(), async(req, res) => {
    try {
        const{username, password} = req.body;

        // does the username alreayd exists?
        const exists = await UserSignup.findOne({ username });
        if (exists) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);

        // else create a username
        await UserSignup.create({username, password: hashedPassword});

        res.json({ msg: 'User added successfully', isLoggedIn: true});
    } catch (err) {
        console.error("Error during signup: ", err);
        res.status(500).json({ error: 'Internal server error' });

    }
});

router.post('/login', bodyParser.json(), async(req, res) => {
    try {
        const{username, password} = req.body;

        // does the username alreayd exists?
        const exists = await UserSignup.findOne({ username });
        if (!exists) {
            return res.status(400).json({error: 'Username does not exists'});
        }

        // is password correct? 
        const isValid = await bcrypt.compare(password, exists.password);
        if (!isValid){
            return res.status(400).json({error: 'Invalid password'});
        } 

        // everything correct?
        res.json({msg: 'Login Successful',isLoggedIn: true, exists});
    } catch (err) {
        console.error("Error during login: ", err);
        res.status(500).json({ error: 'Internal server error' });

    }

});






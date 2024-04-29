const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({origin: true, credentials: true}));
app.use(express.json()); // To parse JSON bodies

app.get('/', (req, res) => res.send('Hello World!'));
const port = process.env.PORT || 8082;


const conn_str = `mongodb+srv://mcc05495:011702MC@cluster0.w3qchzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.set('strictQuery', false);
mongoose.connect(conn_str)
    .then(() => {
        console.log(`MongoDB Connection Succeeded...`);
    })
    .catch(err => {
        console.log(`Error in DB Connection ${err}`);
    });

// Import routes
const users = require('./routes/api/users');
app.use('/api/users', users);


// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
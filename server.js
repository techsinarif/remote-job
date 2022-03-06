const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/remotejobs');

mongoose.connection.once('open', () => {
  console.log('DB connection has been made');
});

// Use the contacts.js to handle the endpoints starts with '/api/contact';
app.use('/api/job', require('./routes/jobs'));

const port = 8080;
app.listen(port, () => {
  console.log('application started in port:', port);
})
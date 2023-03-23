// npm install express mongoose body-parser

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Doctors login API!' });
});

// MongoDB connection
mongoose.Promise = global.Promise;

mongoose.connect('<MONGODB_URI>', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to MongoDB.");
}).catch(err => {
  console.log('Could not connect to MongoDB.', err);
  process.exit();
});

// create mongoose schema
const DoctorSchema = mongoose.Schema({
  lastName: String,
  timeOfArrival: String,
  gloves: String,
  scrubType: String,
  materials: string,
  
  )}
                                     

  
  

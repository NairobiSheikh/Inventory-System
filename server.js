const express = require('express');
const expressLoyouts = require('express-ejs-layouts')
const mongoose = require('mongoose');

const app = express();

// // DB Config
const db = require('./config/keys').MongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// adding middleware: EJS
app.use(expressLoyouts);
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
/*
all of the home page slash thing are going to be here
and dashboard things
*/
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('welcome'));

module.exports = router;
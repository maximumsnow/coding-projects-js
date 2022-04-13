const path = require('path');
const express = require('express');
const router = express.Router();
const magic8Ball = require('../lib/magic8Ball');

router.get('/challenge', (req, res, next) => {

    res.sendFile(path.join(__dirname, '../views/magic8Ball.html'));
});


router.get('/', (req, res, next) => {
    
    res.status(200).send(magic8Ball.randomMessage());

});

module.exports = router;
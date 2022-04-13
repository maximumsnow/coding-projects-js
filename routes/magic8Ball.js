const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    
    const result = "My Magic 8 Ball is Broken. :( -- Sadness...";

    res.status(200).send(result);

});

module.exports = router;
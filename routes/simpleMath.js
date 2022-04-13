const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    let result = res.query.operandOne + res.query.operandTwo;

    res.status(200).send(result);
    
});

module.exports = router;
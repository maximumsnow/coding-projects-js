const express = require('express');
const router = express.Router();
const PrimeFactors = require('../lib/primeFactors');


router.get('/', (req, res, next) => {

    res.status(200).send(PrimeFactors.getPrimeFactorsAsEquation(req.query.number));

});

module.exports = router;
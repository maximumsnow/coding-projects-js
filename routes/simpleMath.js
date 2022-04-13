const express = require("express");
const router = express.Router();
const path = require('path');
const simpleMath = require("../lib/simpleMath");

router.get("/", (req, res, next) => {

    if (req.query.operandOne === undefined || req.query.operandTwo == undefined) {
        res.sendFile(path.join(__dirname, '../views/simpleMath.html'));
    } else {
        res
            .status(200)
            .send(
                simpleMath.calculator(
                    Number(req.query.operandOne),
                    Number(req.query.operandTwo),
                    req.query.operation
                )
            );
    }
});

module.exports = router;

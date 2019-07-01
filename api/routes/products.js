var express = require('express');
var router = express.Router();

router.get('/', (req, res, next ) => {
    res.status(200).json({
        message: 'get request'
    })
});

router.post('/', (req, res, next ) => {
    res.status(201).json({
        message: 'post request'
    })
});

module.exports = router;
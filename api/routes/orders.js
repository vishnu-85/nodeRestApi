var express = require('express');
var router = express.Router();

router.get('/', (req, res, next ) => {
    res.status(200).json({
        message: 'get orders'
    })
});

router.post('/', (req, res, next ) => {
    res.status(201).json({
        message: 'post order detail'
    })
});

router.get('/:orderId', (req, res, next ) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: 'get order by order id',
        order_id : orderId
    })
});


router.delete('/:orderId', (req, res, next ) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: 'delete order by order id',
        order_id : orderId
    })
});

module.exports = router;
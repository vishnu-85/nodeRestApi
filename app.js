const express = require('express');
const app = express();
const morgan = require('morgan');
const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", 'PUT, POST, GET, DELETE, PATCH')
        return res.status(200).json({});
    }
})

app.use((req,res,next) => {
    const error = new Error('page not found');
    error.status = 404;
    next(error);
});

app.use((error, req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message,
            error_code: error.status
        }
    });
});

module.exports = app;
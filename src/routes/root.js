const express = require('express');
const product = require('../routes/product');

const router = express.Router();

//Route Milik roduct
router.use('/product', product);

module.exports = router;
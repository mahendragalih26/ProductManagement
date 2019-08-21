const express = require('express')
const router = express.Router()

const product = require('../controllers/product')

router
    .get('/', product.getAll)
    .post('/', product.insertProduct)
    .patch('/update/:id', product.updateProduct)
    .delete('/delete/:id', product.deleteProduct)

module.exports = router
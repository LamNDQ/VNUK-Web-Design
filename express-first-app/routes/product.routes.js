const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//route GET: danh sách sản phẩm 
router.get('/', productController.getProducts);

//route GET: chi tiết sản phẩm theo ID
router.get('/:id', productController.getProductById);

module.exports = router;
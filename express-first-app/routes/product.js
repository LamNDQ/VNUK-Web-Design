const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//route GET: danh sách sản phẩm 
router.get('/', productController.getProducts);

//route GET:id chi tiết sản phẩm theo ID
router.get('/:id', productController.getProductById);

//route POST: thêm sản phẩm mới
router.post('/', productController.addProduct);

module.exports = router;    
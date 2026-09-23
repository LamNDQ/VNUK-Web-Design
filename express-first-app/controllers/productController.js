const Product = require('../models/productModel')

//Hiển thị danh sách sản phẩm
exports.getProducts = (req, res) => {
    const products = Product.getAll();
    res.render('products', { products });
}

//Hiển thị chi tiết sản phẩm
exports.getProductById = (req, res) => {
    const product = Product.getById(req.params.id);
    if (product) {
        res.send(`<!DOCTYPE html>
<html>
<head>
    <title>${product.name} - TechStore</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <div class="detail">
        <img src="${product.img}" alt="${product.name}">
        <h1>${product.name}</h1>
        <p class="price">$${product.price}</p>
        <a class="back" href="/products">&larr; Về danh sách</a>
    </div>
</body>
</html>`);
    } else {
        res.send(`<!DOCTYPE html>
<html>
<head>
    <title>Không tìm thấy</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <div class="detail">
        <h1>Không tìm thấy sản phẩm</h1>
        <a class="back" href="/products">&larr; Back</a>
    </div>
</body>
</html>`);
    }
}

//Thêm sản phẩm mới (POST)
exports.addProduct = (req, res) => {
    const newProduct = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price,
        img: req.body.img
    };
    Product.add(newProduct);
    res.redirect('/products');
}
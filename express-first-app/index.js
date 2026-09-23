const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//Import router
const productRouter = require('./routes/product.routes');

//Gắn router vào ứng dụng
app.use('/products', productRouter);

app.listen(port, () => {
    console.log(`Server run on http://localhost:3000`);
})

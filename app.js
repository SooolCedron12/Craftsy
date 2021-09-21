const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

/* recursos estáticos */
app.use(express.static('public'));

/* rutas */
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const userRouter = require('./routes/users');


app.use('/',mainRouter);
app.use('/products',productsRouter);
app.use('/users',userRouter);


app.listen(port, () => console.log('Server running in port ' + port))
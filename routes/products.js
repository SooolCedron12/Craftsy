const express = require('express');
const router = express.router();

const {detail,add} =require('../controllers/productsControllers');

/* /products */
router.get('/detail',detail);
router.get('/add',add);


module.exports = router;
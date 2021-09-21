const express = require('express');
const router = express.Router();

const {detail,add} =require('../controllers/productsControllers');

/* /products */
router.get('/detail',detail);
router.get('/add',add);


module.exports = router;
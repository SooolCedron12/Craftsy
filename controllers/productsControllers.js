const path = require('path');
module.exports ={
    detail : (req,res) => res.sendFile(path.join(__dirname, '..', 'views', 'productDetail.html')),
    add : (req,res) => res.sendFile(path.join(__dirname, '..', 'views', 'productAdd.html')),
}
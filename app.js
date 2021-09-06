const express = require('express');
const app = express();
/*const path = require('path');*/
const port = 3030;

app.use(express.static('public'));

/*app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));*/
app.get('/login',(req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register',(req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
      /* A D M I N */
/*app.get('/admin', (req,res) => res.sendFile(path.join(__dirname,'views','admin','index.html')));*/
app.get('/admin/productAdd', (req,res) => res.sendFile(path.join(__dirname,'views', 'admin', 'productAdd.html')))
      /* C O N T R O L L E R S */
/*const mainControllers = require('./controllers/mainControllers')*/    
const {index,admin} = require('./controllers/mainControllers');
const{login, register} = require('./controllers/usersControllers');
const{detail,add} = require('./controllers/productsControllers')
/*app.get('/', mainControllers.index);
app.get('/admin', mainControllers.admin)*/

/* ruta sin prefijo */ 
app.get('/',index);
app.get('/admin', admin);

/*  ruta de los productos */
app.get('/products/detail',detail);
app.get('products/add',add);

/* ruta con prefijo de usuarios */ 
app.get('/users/login', login);
app.get('/users/register', register);

/*app.get('/user/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('user/register',(req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));*/

app.listen(port,() => console.log('Server corriendo en el port ' + port))
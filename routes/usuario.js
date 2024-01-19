var express = require('express');
var router = express.Router();

const controladorUsuarios = require('../controllers/usuarioController');

router.get('/', controladorUsuarios.getUsuarios);

router.post('/register', controladorUsuarios.register);

router.get('/login', controladorUsuarios.login);

module.exports = router;

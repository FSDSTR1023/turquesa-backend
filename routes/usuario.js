var express = require('express');
var router = express.Router();
var authMiddleware = require("../middlewares/auth.middleware.js");

const controladorUsuarios = require('../controllers/usuarioController');

router.get('/', controladorUsuarios.getUsuarios);

router.post('/register', controladorUsuarios.register);

router.get('/login', controladorUsuarios.login);

router.post('/logout', controladorUsuarios.logout);

router.post('/userAuth', authMiddleware, controladorUsuarios.checkUserSaved);

module.exports = router;

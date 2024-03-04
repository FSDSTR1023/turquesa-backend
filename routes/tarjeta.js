// routes/tarjeta.js

var express = require('express');
var router = express.Router();

const controladorTarjetas = require('../controllers/tarjetaController');

// General routes
router.get('/', controladorTarjetas.getTarjetasMuestra);
router.post('/', controladorTarjetas.crearTarjeta);
router.put('/', controladorTarjetas.updateTarjeta);

// Specific routes
router.get('/all', controladorTarjetas.getAllTarjetas);
router.post('/usuario/all', controladorTarjetas.getTarjetasPorUsuario);

router.post('/usuario/crear', controladorTarjetas.generarTarjetaParaUsuario);

// // ID-specific routes
router.get('/:id', controladorTarjetas.getTarjeta);
router.put('/:id', controladorTarjetas.updateTarjetaById);
// router.delete('/:id', controladorTarjetas.borrarTarjeta);

module.exports = router;

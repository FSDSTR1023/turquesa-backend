// routes/tarjeta.js

var express = require('express');
var router = express.Router();

const controladorTarjetas = require('../controllers/tarjetaController');

// General routes
router.get('/', controladorTarjetas.getTarjetasMuestra);
router.post('/', controladorTarjetas.crearTarjeta);

// Specific routes
router.get('/all', controladorTarjetas.getAllTarjetas);
router.get('/usuario/:userId', controladorTarjetas.getTarjetasPorUsuario);

// ID-specific routes
router.get('/:id', controladorTarjetas.getTarjeta);
router.put('/:id', controladorTarjetas.updateTarjeta);
router.delete('/:id', controladorTarjetas.borrarTarjeta);

module.exports = router;

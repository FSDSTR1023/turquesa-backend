var express = require('express');
var router = express.Router();

const controladorTarjetas = require('../controllers/tarjetaController');

router.get('/', controladorTarjetas.getTarjetasMuestra);

router.get('/:id', controladorTarjetas.getTarjeta);

router.put('/:id', controladorTarjetas.updateTarjeta);

router.post('/', controladorTarjetas.crearTarjeta);

router.delete('/:id', controladorTarjetas.borrarTarjeta);

module.exports = router;

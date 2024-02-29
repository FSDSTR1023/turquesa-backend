// routes/asistente.js


var express = require('express');
var router = express.Router();
const asistenteController = require('../controllers/asistenteController');

// Route to get all asistentes
router.get('/', asistenteController.getAsistentes);

router.get('/one', asistenteController.getAsistente);

// Route to create a new asistente
router.post('/create', asistenteController.crearAsistente);

// Route to update an asistente by ID
router.put('/update/:id', asistenteController.updateAsistente);

// Route to delete an asistente by ID
router.delete('/delete/:id', asistenteController.borrarAsistente);

module.exports = router;

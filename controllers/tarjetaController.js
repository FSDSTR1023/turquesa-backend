// controllers/tarjetaController.js
const Tarjeta = require('../models/tarjeta.model.jsx');

async function getTarjetas(req,res) {
    Tarjeta.find()
        .then(tarjetas => {
            console.log('Tarjetas encontradas: ', tarjetas)
            res.status(200).json(tarjetas)
        })
        .catch(err => {
            console.log('Error al recuperar las tarjetas: ', err)
            res.status(400).json(err)
        });
}

async function getTarjetasMuestra(req,res) {
    Tarjeta.find({
        id_usuario: {$eq: null}
    })
        .then(tarjetas => {
            console.log('Tarjetas encontradas: ', tarjetas)
            res.status(200).json(tarjetas)
        })
        .catch(err => {
            console.log('Error al recuperar las tarjetas: ', err)
            res.status(400).json(err)
        });
}

async function getTarjeta(req,res) {
    Tarjeta.findById(req.params.id) // he modificado esto find-> findbyID porque el deploymet sin no no va
        .then(tarjeta => {
            console.log('Tarjeta encontrada: ', tarjeta)
            res.status(200).json(tarjeta)
        })
        .catch(err => {
            console.log('Error al recuperar la tarjeta: ', err)
            res.status(400).json(err)
        });
}

async function updateTarjeta(req,res) {
    const tarjetaAActualizar = req.query.tarjeta;
    Tarjeta.findByIdAndUpdate(tarjetaAActualizar._id, {$set: tarjetaAActualizar})
        .then(tarjeta => {
            console.log('Tarjeta actualizada: ', tarjeta)
            res.status(200).json(tarjeta)
        })
        .catch(err => {
            console.log('Error al actualizar la tarjeta: ', err)
            res.status(400).json(err)
        });
}

async function crearTarjeta(req, res) {
    const tarjeta= req.body;
    tarjeta.id = Math.random().toString(36);
    Tarjeta.create(tarjeta)
    .then(tarjeta => {
        console.log(`Tarjeta creada: ${tarjeta}`)
        res.status(200).json(tarjeta)
    })
    .catch(err => {
        console.log('Error al crear la tarjeta: ', err)
        res.status(400).json(err)
    });
}

async function borrarTarjeta(req,res) {
    Tarjeta.findByIdAndDelete(req.params.id)
        .then(tarjeta => {
            console.log('Tarjeta borrada: ', tarjeta)
            res.status(200).json(tarjeta)
        })
        .catch(err => {
            console.log('Error al borrar la tarjeta: ', err)
            res.status(400).json(err)
        });
}

//  Function that fetches only the tarjetas associated with the logged-in user ID


async function getTarjetasPorUsuario(req, res) {
    const userId = req.body.user; // Assumes you pass the user ID as a parameter
    console.log("userId: ", userId);
    Tarjeta.find({ id_usuario: {$eq: userId} })
        .then(tarjetas => {
            console.log('Tarjetas del usuario encontradas: ', tarjetas);
            res.status(200).json(tarjetas);
        })
        .catch(err => {
            console.error('Error al recuperar las tarjetas del usuario: ', err);
            res.status(400).json(err);
        }); 
    // console.log("Funciona!");
    // res.status(200).send("Hola");
} 


// New function to get all tarjetas
async function getAllTarjetas(_req, res) {
    try {
        const tarjetas = await Tarjeta.find({});
        console.log('All tarjetas found:', tarjetas);
        res.status(200).json(tarjetas);
    } catch (err) {
        console.error('Error retrieving all tarjetas:', err);
        res.status(400).json({ error: err.message });
    }
}

async function generarTarjetaParaUsuario(req, res) {
    const tarjeta = req.body.tarjeta;
    const usuario = req.body.usuario;
    console.log("Tarjeta que intenta crear: ", tarjeta)
    tarjeta._id = null;
    tarjeta.id_usuario = usuario;
    Tarjeta.create(tarjeta)
        .then(tarjeta => {
            console.log(`Tarjeta creada: ${tarjeta}`)
            res.status(200).json(tarjeta)
        })
        .catch(err => {
            console.log('Error al crear la tarjeta: ', err)
            res.status(400).json(err)
        });
}



module.exports = {
    getTarjetas,
    getTarjetasMuestra,
    getTarjeta,
    updateTarjeta,
    crearTarjeta,
    borrarTarjeta,
    getTarjetasPorUsuario, 
    getAllTarjetas, 
    generarTarjetaParaUsuario
};
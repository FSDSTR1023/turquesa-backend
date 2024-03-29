const Usuario = require('../models/usuario.model.jsx');
const jwt = require("jsonwebtoken");

async function getUsuarios(req,res) {
    Usuario.find()
        .then(usuarios => {
            console.log('Usuarios encontrados: ', usuarios)
            res.status(200).json(usuarios)
        })
        .catch(err => {
            console.log('Error al recuperar los usuarios: ', err)
            res.status(400).json(err)
        });
}

async function updateUsuario(req,res) {
    const usuarioAActualizar = req.body;
    Usuario.findByIdAndUpdate(req.params.id, {$set: usuarioAActualizar})
        .then(usuario => {
            console.log('Usuario actualizado: ', usuario)
            res.status(200).json(usuario)
        })
        .catch(err => {
            console.log('Error al actualizar el usuario: ', err)
            res.status(400).json(err)
        });
}

async function login(req,res) {
    const user= req.query.email;
    const pass= req.query.contraseña;
    const usuarioRecuperado = Usuario.findOne({
        email: {$eq: user},
        contraseña: {$eq: pass},
    })
        .then(usuario => {
            if (!usuario) {
                res.status(203).json("No se ha encontrado al usuario");
            } else {
                console.log('Usuario encontrado: ', usuario);
                jwt.sign(
                    { id: usuario.id, email: usuario.email },
                    process.env.JWT_SECRET,
                    (err, token) => {
                        if (err) {
                            res.status(401).send({ error: err.message });
                        } else {
                            console.log("Llega a la cookie");
                            try {
                            res
                                .cookie("tokenTurquesa", token, {
                                    httpOnly: true,
                                    secure: false,
                                    expires: new Date("2100-12-17T03:24:00"),
                                })
                                .json(usuario);
                            } catch (error)  {
                                console.error(error);
                            }
                            console.log("Pasa la cookie");
                        //res.status(201).send({ token });
                        }
                    }
                );
            }
        })
        .catch(err => {
            console.log('Error al recuperar el usuario: ', err)
            res.status(400).json(err)
        });
}

async function register(req, res) {
    const usuario = req.body;
    usuario.id = Math.random().toString(36);
    Usuario.create(usuario)
    .then(usuario => {
        console.log(`Usuario creado: ${usuario}`)
        res.status(200).json(usuario)
    })
    .catch(err => {
        console.log('Error al crear el usuario: ', err)
        res.status(400).json(err)
    });
}

async function logout(_req,res) {
    try {
        res.clearCookie("tokenTurquesa").send();
    } catch (error)  {
        console.error(error);
    }
}

async function borrarUsuario(req,res) {
    Usuario.findByIdAndDelete(req.params.id)
        .then(usuario => {
            console.log('Usuario borrado: ', usuario)
            res.status(200).json(usuario)
        })
        .catch(err => {
            console.log('Error al borrar el usuario: ', err)
            res.status(400).json(err)
        });
}


async function checkUserSaved(req, res) {
    console.log("usuario id", req.user.id);
    const usuarioRecuperado = await Usuario.findById(req.user.id)
    console.log("usuarioRecuperado", usuarioRecuperado);
    res.json({ usuarioRecuperado, password: undefined });
}


module.exports = {
    getUsuarios,
    updateUsuario,
    login,
    register,
    logout,
    borrarUsuario,
    checkUserSaved
}
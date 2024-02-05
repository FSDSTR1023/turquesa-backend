const Usuario = require('../models/usuario.model.jsx');

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
    Usuario.findOne({
        email: {$eq: user},
        contraseña: {$eq: pass},
    })
        .then(usuario => {
            if (!usuario) {
                res.status(203).json("No se ha encontrado al usuario");
            } else {
                console.log('Usuario encontrado: ', usuario)
                res.status(200).json(usuario)
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

// app.post("/api/login", (req, res) => {
//   const { username, password } = req.body;

//   const user = users.find(
//     (user) => user.username === username && user.password === password
//   );
//   if (!user) {
//     res.status(401).send({ error: "User not found" });
//     return;
//   }

//   jwt.sign(
//     { id: user.id, username: user.username },
//     process.env.JWT_SECRET,
//     (err, token) => {
//       if (err) {
//         res.status(401).send({ error: err.message });
//       } else {
//         res
//           .cookie("token", token, {
//             httpOnly: true,
//             secure: false,
//             expires: new Date("2100-12-17T03:24:00"),
//           })
//           .status(201)
//           .send();
//         //res.status(201).send({ token });
//       }
//     }
//   );
// });

// app.post("/api/logout", (_req, res) => {
//   res.clearCookie("token").send();
// });

// app.get("/api/profile", authMiddleware, (req, res) => {
//   const user = users.find((user) => user.id === req.user.id);
//   res.json({ ...user, password: undefined });
// });

module.exports = {
    getUsuarios,
    updateUsuario,
    login,
    register,
    borrarUsuario
}
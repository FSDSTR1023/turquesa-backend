const express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usuario.js');

const app = express();
const port = 3000;

require('dotenv').config();
app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@"+process.env.DB_SERVER+"/"+process.env.DB_NAME+"?retryWrites=true&w=majority";
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch(err => {console.log(mongoDB); console.log(err)});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    res.status(401).send({ error: "User not found" });
    return;
  }

  jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    (err, token) => {
      if (err) {
        res.status(401).send({ error: err.message });
      } else {
        res
          .cookie("token", token, {
            httpOnly: true,
            secure: false,
            expires: new Date("2100-12-17T03:24:00"),
          })
          .status(201)
          .send();
        //res.status(201).send({ token });
      }
    }
  );
});

app.post("/api/logout", (_req, res) => {
  res.clearCookie("token").send();
});

app.get("/api/profile", authMiddleware, (req, res) => {
  const user = users.find((user) => user.id === req.user.id);
  res.json({ ...user, password: undefined });
});

module.exports = app;

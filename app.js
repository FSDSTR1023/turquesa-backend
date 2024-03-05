const express = require('express');
const cors = require('cors');
const createError = require('http-errors'); 

require('dotenv').config();
var path = require('path');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usuario.js');
var tarjetasRouter = require('./routes/tarjeta.js');
var asistentesRouter = require('./routes/asistente'); 
var mailRouter = require("./mail/mail-routes");
var cookieParser =  require("cookie-parser");


const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

app.use(cors({
  origin: 'https://cloudinvito.netlify.app',
  credentials: true,
}));


app.use(express.json());
app.use('/health', indexRouter);
app.use('/users', usersRouter);
app.use('/tarjeta', tarjetasRouter);
app.use('/asistentes', asistentesRouter);
app.use("/mail", mailRouter);
app.use(cookieParser());


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
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

module.exports = app;

var createError = require('http-errors');
const express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usuario');

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

module.exports = app;

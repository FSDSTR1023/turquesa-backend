require("dotenv").config();
const express = require("express");
var path = require("path");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/usuario.js");
var tarjetasRouter = require("./routes/tarjeta.js");
var asistentesRouter = require("./routes/asistente"); // Ensure the path is correct
var cookieParser = require("cookie-parser");
var mailRouter = require("./mail/mail-routes");

const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(
    cors({
        origin: "https://cloudinvito.netlify.app",
        credentials: true,
    })
);

app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://cloudinvito.netlify.app"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);

    next();
});

app.use(cookieParser());
app.use(express.json());
app.use("/users", usersRouter);
app.use("/tarjeta", tarjetasRouter);
app.use("/asistentes", asistentesRouter);
app.use("/mail", mailRouter);

const mongoose = require("mongoose");
const mongoDB =
    "mongodb+srv://" +
    process.env.DB_USER +
    ":" +
    process.env.DB_PASSWORD +
    "@" +
    process.env.DB_SERVER +
    "/" +
    process.env.DB_NAME +
    "?retryWrites=true&w=majority";
async function main() {
    await mongoose.connect(mongoDB);
}
main().catch((err) => {
    console.log(mongoDB);
    console.log(err);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = app;

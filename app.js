const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./api/routes/routes");
const mongoose = require("mongoose");

// listener for requests
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// routes which should handle requests
app.use("/api", routes);

// connect with mongo atlas
// mongodb+srv://zepto:<password>@zepto.fe8uh.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose
  .connect(
    "mongodb+srv://zepto:1234@zepto.fe8uh.mongodb.net/zeptodb?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected with db in mongo atlas!!!");
  });

// app.use((req, res, next) => {
//   res.status(200).json({
//     message: "server works!",
//   });
// });

// app.use((req, res, next) => {
//   const error = new Error("route not found");
//   error.status = 404;
//   next(error);
// });

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;

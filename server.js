// DEPENDENCIES
require("dotenv").config();
// pull PORT from .env, give default value of 4000
const { PORT = 4000 } = process.env;
const express = require("express");
const app = express();

// import middlware
const cors = require("cors");
const morgan = require("morgan");
const recipesRouter = require("./controllers/recipe");
const bodyParser = require("body-parser");

// MiddleWare
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(bodyParser.json({limit:"200mb"}))
// app.use(express.json()); // parse json bodies
app.use("/recipes", recipesRouter)

// ROUTES
//test route
app.get("/", (req, res) => {
  res.send("hello world");
});

// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
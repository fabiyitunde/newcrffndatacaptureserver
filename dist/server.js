"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const index_1 = require("./routes/index");
const index_2 = require("./eventhandlers/index");
const PORT = process.env.PORT || 3000;
var app = express();
//app.use(cors({ credentials: true, origin: config.get("clientaddress") }));
app.use(cors());
app.use(bodyParser.json());
//support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
index_1.initRoutes(app);
mongoose.connect(config.get("db"), { useNewUrlParser: true });
//require("../startup/logging")();
require("../startup/routes")(app);
//require("../startup/db")();
require("../startup/config")();
require("../startup/validation")();
var server = app.listen(PORT, () => {
    console.log("Express server listening on port... " + PORT);
    console.log("Db Connection...connection changed", config.get("db"));
});
index_2.initHandlers();
//# sourceMappingURL=server.js.map
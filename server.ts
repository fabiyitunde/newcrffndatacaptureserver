import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as cors from "cors";
import * as config from "config";
import { initRoutes } from "./routes/index";

import { initHandlers } from "./eventhandlers/index";

const PORT = process.env.PORT || 3000;

var app = express();
//app.use(cors({ credentials: true, origin: config.get("clientaddress") }));
app.use(cors());

app.use(bodyParser.json());
//support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

initRoutes(app);

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
initHandlers();

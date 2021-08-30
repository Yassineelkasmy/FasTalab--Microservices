import express from "express";
import config from "config";
import log from "@fastalab/common/build/logger";
import connect from "./db/connect";
import routes from "./routes";
import { deserializeManager } from "@fastalab/common";
import { initializeFirebaseManagerApp } from '@fastalab/common';

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();
app.use(deserializeManager);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);
  connect();
  var serviceAccount = require("../secrets/fastalab-manager-firebase-adminsdk.json");
  initializeFirebaseManagerApp(serviceAccount);
  
  routes(app);
});

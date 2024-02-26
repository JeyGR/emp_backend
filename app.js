const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);
const port = 3000;
const start = (port) => {
  app.listen(port, () => {
    console.log(`Server listening to ${port}`);
  });
};
start(port);

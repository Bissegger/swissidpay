const express = require("express");
const cors = require("cors");

const {login} = require("./auth");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", login);
app.use("/api", routes);

app.listen(3000, ()=>console.log("Server läuft auf 3000"));

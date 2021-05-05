require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const routes = require("./routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ hello: "World" }));
app.use("/all", routes.admin);

app.listen(port, console.log(`Server started on port ${port}`));

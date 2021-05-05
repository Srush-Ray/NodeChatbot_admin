require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const routes = require("./routes");
const path = require("path");
console.log(__dirname);
const buildPath = path.join(__dirname, "..", "/build");
app.use(express.static(buildPath));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/build/index.html"));
});
app.use("/all", routes.admin);

app.listen(port || 4000, console.log(`Server started on port ${port}`));

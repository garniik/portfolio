const express = require("express");
const path = require("path");
const mainRoutes = require("./src/routes/main.routes");

const app = express();

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Assets statiques
app.use(express.static(path.join(__dirname, "src/public")));

app.use("/", mainRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log("Portfolio running on http://localhost:" + PORT));

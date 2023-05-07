require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const DBConnection = require("./api/config/dBConfig");
const authRoutes = require("./api/modules/auth/authRoutes");
const contactRoute = require("./api/modules/contact/contactRoutes");
const path = require("path");
// middlewares
app.use(express.json());
app.use(morgan("dev"));
// routes
app.use("/api/v1", authRoutes, contactRoute);

// console.log(__dirname, "process.env.NODE_ENV");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname, "/client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Welcome to contact manager API");
  });
}
// Server Running
const port = process.env.PORT || 4000;
DBConnection()
  .then(() => {
    app.listen(port, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(
        `Server is running on port: ${port} and Connection to Database successful`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

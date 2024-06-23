import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import config from "./config.js";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: config.PASSWORD,
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  // put username and password into database

  res.redirect("/"); // send back to home page so they log in
});

app.post("/login", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  // check that username and password are in database
  res.redirect("/"); // send back to home page so they log in
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

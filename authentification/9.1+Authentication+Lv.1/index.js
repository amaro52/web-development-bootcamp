import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import config from "./config.js";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
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
  let email = req.body.username;
  let password = req.body.password;

  try {
    // check if email already exists
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      // put username and password into database
      await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [
        email,
        password,
      ]);

      res.redirect("/"); // send back to home page so they log in
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  let email = req.body.username;
  let password = req.body.password;

  // check that username and password are in database
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    // check if in database
    if (result.rows.length > 0) {
      const user = result.rows[0];

      // check if password is correct
      if (password === user.password) {
        res.render("secrets.ejs"); // correct password -> reveal secret
      } else {
        res.send("Incorrect Password"); // incorrect password
      }
    } else {
      res.send("User not found"); // username does not exist
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

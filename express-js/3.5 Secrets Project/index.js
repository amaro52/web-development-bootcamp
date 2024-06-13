//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// password and authorization
const PASSWORD = "Amogh";
let authorized = false;
// const NUM_OF_GUESSES = 5;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
  const userGuess = req.body["password"];
  if (userGuess === PASSWORD) {
    authorized = true;
  }

  next();
}

app.use(checkPassword);

/**
 * home page
 */
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

/**
 * secret page
 */
app.get("/secret", (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
});

/**
 * decide whether to go to secret page or not
 */
app.post("/check", (req, res) => {
  if (authorized) {
    res.redirect("/secret");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

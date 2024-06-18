import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import config from "./config.js";

const app = express();
const port = 3000;

// connect data base
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: config.PASSWORD,
  port: 5432,
});
db.connect();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// get hompage
app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(result.rows);

  // render to website
  res.render("index.ejs", { countries: countries, total: countries.length });
});

// insert new country
app.post("/add", async (req, res) => {
  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [req.body["country"]]
  );

  if (result.rows.length !== 0) {
    const data = result.rows[0];
    const countryCode = data.country_code;

    // add to database of visited countries
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);
  }

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

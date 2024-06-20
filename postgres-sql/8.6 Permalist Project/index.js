import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import config from "./config.js";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: config.PASSWORD,
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = []; // array for tasks
app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM items ORDER BY id ASC"); // get the Todo list in order
  items = result.rows; // add tasks to the array

  res.render("index.ejs", {
    listTitle: "Today's Agenda",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  // insert new item into db
  await db.query("INSERT INTO items (title) VALUES ($1)", [req.body.newItem]);

  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  // store req from the frontend
  let id = req.body.updatedItemId;
  let updatedItem = req.body.updatedItemTitle;

  // update the note
  await db.query("UPDATE items SET title = $1 WHERE id = $2", [
    updatedItem,
    id,
  ]);

  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  // delete item from database
  db.query("DELETE FROM items WHERE id = $1", [req.body.deleteItemId]);

  // potentially add to recently deleted database ???

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

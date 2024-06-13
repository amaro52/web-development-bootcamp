import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//  *** REQUEST VOCAB ***
/**
 * GET    [=] request resource from server or database
 * POST   [=] sending resource from server or database
 * PUT    [=] replace resource  - (amazon sends u a completely new product if yours is broken)
 * PATCH  [=] patch up resource - (amazon sends u a certain part to fix ur product )
 * DELETE [=] delete resource from server or database
 */

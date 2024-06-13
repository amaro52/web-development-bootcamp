import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  // set dayType and advice accordingly
  let typeOfDay = "";
  let adv = "";
  // if it is a weekend
  if (day == 0 || day == 6) {
    typeOfDay = "the weekend";
    adv = "have fun";
  } else {
    // weekday
    typeOfDay = "a weekday";
    adv = "work hard";
  }

  // render the rght message
  res.render("index.ejs", { dayType: typeOfDay, advice: adv });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
// sudo lsof -i -P -n | grep LISTEN  = this looks at all the ports being occupied

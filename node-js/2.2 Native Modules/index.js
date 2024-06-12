const fs = require("fs");

// fs.writeFile("amogh-message.txt", "Hello from Node.js", (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("The file has been saved!");
// });

// utf-8 needed for it to look normal
let message = fs.readFile("./amogh-message.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }

  console.log(data);
});

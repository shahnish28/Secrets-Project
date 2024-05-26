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

var useris = false;
app.use(bodyParser.urlencoded({ extended: true }));

function pwdcheck(req, res, next) {
  const pwd = req.body["password"];
  if (pwd === "ILoveProgramming") {
    useris = true;
  }
  next();
}

app.use(pwdcheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (useris) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    // res.redirect("/")
    // can also use res.redirect which does the same job as what is written above
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

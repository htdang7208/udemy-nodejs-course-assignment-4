const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const usersData = [];

/** Configure for working with pug */
app.set("view engine", "pug");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", (req, res, next) => {
  usersData.push({ name: req.body?.name });
  res.render("users", { users: usersData });
});

app.use("/", (req, res, next) => {
  /** Some ways to work:
    1: 
        const path = require("path");
        const rootDir = path.dirname(require.main.filename);
        res.sendFile(path.join(rootDir, "home.html"));
    2: 
        res.sendFile(`${__dirname}/home.html`);
    */

  /** Working with pug */
  //   usersData.push({ name: req.body.name });
  res.render("home");
});

app.listen(3000);

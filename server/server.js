const express = require("express");
const app = express();
const cors = require("cors");
const nodeoutlook = require("nodejs-nodemailer-outlook");

require("dotenv").config();

app.set("view engine", "ejs");

const port = process.env.PORT || 3001;

app.use(cors());
// parse application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.post("/contact", (req, res) => {
  console.log(req.body);

  nodeoutlook.sendEmail({
    auth: {
      user: "masd_123@hotmail.com",
      pass: "mundostar.2",
    },
    from: "masd_123@hotmail.com",
    to: "marcoantoniosanchez2018@gmail.com",
    subject: "Hey you, awesome!",
    html: "<b>This is bold text</b>",
    text: "This is text version!",
    replyTo: "@gmail.com",

    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i),
  });
  res.render("submit");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

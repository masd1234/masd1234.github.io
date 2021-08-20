const express = require("express");
const app = express();
const cors = require("cors");
const nodeoutlook = require("nodejs-nodemailer-outlook");

require("dotenv").config();

app.set("view engine", "ejs");

const port = process.env.PORT || 5000;

app.use(cors());
// parse application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.post("/contact", (req, res) => {
  nodeoutlook.sendEmail({
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORDEMAIL,
    },
    from: process.env.EMAIL,
    to: req.body.email,
    subject: `New message from: ${req.body.name}`,
    html: `<p>Name:${req.body.name} ${req.body.lname}</p>
    <p>Message:${req.body.message}</p>`,
    text: "This is text version!",
    replyTo: `${req.body.email}`,

    onError: (e) => res.status(400).send(e),
    onSuccess: (i) => {
      console.log(i);
      res.status(200).send("information receivde");
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

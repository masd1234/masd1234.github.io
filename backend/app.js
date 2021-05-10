const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/contact-submit", (req, res) => {
  console.log(req.body.name);
  res.sendFile("formSent.html", { root: "public" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

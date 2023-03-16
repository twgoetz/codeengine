const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/test", function (req, res, next) {
  res.json({ msg: "Answering CORS enabled request" });
});

app.listen(8080, () =>
  console.log("CORS-enabled web server listening on port 8080")
);

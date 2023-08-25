const app = require("express")();
const bodyParser = require("body-parser");

// Not using this for anything...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let ready = 0;

let alive = true;

const isReady = () => {
  if (ready === 0) {
    return true;
  }
  const now = new Date().valueOf();
  return now > ready;
};

app.get("/ready", (req, res) => {
  const readiness = isReady();
  console.log(`Ready: ${readiness}`);
  if (readiness) {
    res.set("Content-Type", "text/plain").status(200).send("I'm ready");
  } else {
    res.status(404).send("Not ready.");
  }
});

app.get("/alive", (req, res) => {
  console.log("Look lively!");
  if (alive) {
    res.set("Content-Type", "text/plain").status(200).send("I'm alive");
  } else {
    res.set("Content-Type", "text/plain").status(500).send("I'm dead");
  }
});

app.post("/die", (req, res) => {
  console.log("Dying...");
  alive = false;
  res.status(200).send("Dying...");
});

app.post("/sleep/:timeout", (req, res) => {
  const timeoutParam = req.params.timeout || '10';
  const timeout = Number.parseInt(timeoutParam) * 1_000;
  const now = new Date().valueOf();
  ready = now + timeout;
  res.status(200).send(`App will sleep for ${timeoutParam} seconds until ${new Date(ready).toISOString()}`);
});

const port = 80;
app.listen(port, () => {
  console.log("I'm listening!");
});

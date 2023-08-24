const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const {
  readinessDelay,
  readinessDuration,
  livenessOutageDelay,
  livenessOutageLength,
} = process.env;

const start = new Date().getDate();
// ready = 0 -> not ready yet
// ready > 0 -> ready
// ready < 0 -> no longer ready
let ready = 0;

let alive = true;

const isReady = () => {
  if (ready < 0) {
    return false;
  }
  const now = new Date().getDate();
  if (ready > 0) {
    if (!readinessDuration) {
      // If the duration is not set, we never become unready
      return true;
    }
    const readyNow = ready - now < readinessDuration * 1_000;
    if (!readyNow) {
      ready = -1;
    }
  }
  const readyNow = now - start > readinessDelay * 1_000;
  if (readyNow) {
    ready = now;
    return true;
  }
  return false;
};

app.get("/ready", (req, res) => {
  const readiness = isReady();
  console.log(`Ready: ${readiness}`);
  if (readiness) {
    res.set("Content-Type", "text/plain");
    res.send("I'm ready");
  } else {
    res.status(404);
    res.send("Not ready.");
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

const port = 80;
app.listen(port, () => {
  console.log("I'm listening!");
});

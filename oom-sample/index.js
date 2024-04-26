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

const shutdown = () => {
  server.close(() => {
    console.log("Express server shut down, exiting.");
    process.exit(2);
  });
};

app.get("/alive", (req, res) => {
  console.log("Look lively!");
  if (alive) {
    console.log("I'm alive");
    res.set("Content-Type", "text/plain").status(200).send("I'm alive");
  } else {
    console.log("I'm dead");
    res.set("Content-Type", "text/plain").status(500).send("I'm dead");
  }
});

app.post("/die", (req, res) => {
  console.log("Dying...");
  alive = false;
  res.status(200).send("Dying...");
});

app.post("/sleep/:timeout", (req, res) => {
  const timeoutParam = req.params.timeout || "10";
  const timeout = Number.parseInt(timeoutParam) * 1_000;
  const now = new Date().valueOf();
  ready = now + timeout;
  res
    .status(200)
    .send(
      `App will sleep for ${timeoutParam} seconds until ${new Date(
        ready
      ).toISOString()}`
    );
});

// Handle SIGTERM and SIGINT
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

// allocate memory until we run out
const oom = () => {
  let largeArray = []
  while (true) {
    const next = Array.from([1,2,3,4,5,6,7,8,9,0]);
    largeArray = [...largeArray, next];
  }
  return largeArray;
}
oom();

const port = 80;
const server = app.listen(port, () => {
  console.log("I'm listening!");
});

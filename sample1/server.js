
const express = require('express');
const cors = require('cors');
const app = express();
const os = require('os');

app.use(cors());

const userInfo = os.userInfo();
const userPretty = JSON.stringify(userInfo, null, 2);

const bodyText = `
Code Engine

os.userInfo() = ${userPretty}
`;

app.get('/', (req, res) => {
   res.set('Content-Type', 'text/plain');
   res.send(bodyText);
})

const port = 8080;
app.listen(port, () => {
   console.log(`CORS-enabled web server listening on port ${port}`);
});

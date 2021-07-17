
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const bodyText = `
Code Engine

$UID=${process.env['UID']}
$USER=${process.env['USER']}
`;

app.get('/', (req, res) => {
   res.set('Content-Type', 'text/plain');
   res.send(bodyText);
})

const port = 8080;
app.listen(port, () => {
   console.log(`CORS-enabled web server listening on port ${port}`);
});

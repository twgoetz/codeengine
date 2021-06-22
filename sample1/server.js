
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const bodyText = `
. ___  __  ____  ____
./ __)/  \(    \(  __)
( (__(  O )) D ( ) _)
.\___)\__/(____/(____)
.____  __ _   ___  __  __ _  ____
(  __)(  ( \ / __)(  )(  ( \(  __)
.) _) /    /( (_ \ )( /    / ) _)
(____)\_)__) \___/(__)\_)__)(____)

`;

app.get('/', (req, res) => {
   res.set('Content-Type', 'text/plain');
   res.send(bodyText);
})

const port = 8080;
app.listen(port, () => {
   console.log(`CORS-enabled web server listening on port ${port}`);
});

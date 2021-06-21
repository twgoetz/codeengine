
const express = require('express');
const cors = require('cors');
const app = express();
 
app.use(cors());
 
app.get('/', (req, res) => {
  res.json({msg: 'Hello CORS!'})
})

const port = 8080;
app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});

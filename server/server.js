const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 4001;
app.use(bodyParser.json())
app.get('/', (req, res) => {
    console.log('server is connected :D')
});


app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

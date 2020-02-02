const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const users = require('./routes/PostRouter')
app.use(cors())
const port = process.env.PORT || 4001;
app.use(bodyParser.json())
app.get('/', (req, res) => {
    console.log('server is connected :D')
});
app.use(users)
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

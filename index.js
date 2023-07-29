const express = require('express')
const cors = require('cors');
const app = express();
const routes = require('./src/routes/index.js');

require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/', (req, res) => {
  res.send('Node.js + Express.js')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
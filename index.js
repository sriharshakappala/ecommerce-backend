const api = require('./routes/api');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const swaggerConfig = require('./swagger.js');

mongoose.connect('mongodb://localhost/ecommerce');

const app = express();

app.use('/swagger-ui', express.static(path.join(__dirname, 'node_modules/swagger-ui/dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({
  limit: '20mb',
  extended: true,
}));
app.use(bodyParser.urlencoded({
  limit: '20mb',
  extended: true,
}));

app.get('/v1/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerConfig.swaggerSpecV1);
});

app.use('/api', api);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Waiting for connections...' + port);
});

module.exports = app;

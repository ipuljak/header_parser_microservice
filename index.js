// Server requirements
const express = require('express'),
  bodyparser = require('body-parser'),
  methodOverride = require('method-override'),
  cors = require('cors'),
  app = express();

// Routes requirements
const headers = require('./routes/headers');

// Server setup
app.use(cors());
app.use(bodyparser.json({ type: '*/*' }));
app.use(methodOverride('_method'));

// Server routes
app.use('/', headers);

// Server port listen
app.listen(5001, process.env.IP, () => {
  console.log('Timestamp API server started on port 5001.');
});
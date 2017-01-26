const express = require('express');
const moment  = require('moment');
const router  = express.Router();

router.get('/', (req, res) => {
  let software = req.headers['user-agent'];
  let regx = /[(](.*?)[)]/;

  software = software.match(regx)[0].slice(1, -1);

  let information = {
    ipaddress: req.headers.host,
    language: req.headers['accept-language'].split(',')[0],
    software: software
  };

  res.send(information);
});

module.exports = router;
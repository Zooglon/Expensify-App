const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
// PORT is a variable given for dynamic ports by Heroku

// this is used to register some middle-ware
app.use(express.static(publicPath));

// the asterisk serves up any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// port 3000
app.listen(port, () => {
  console.log('server is go');
});

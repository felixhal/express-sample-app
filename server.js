const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.send('This is working');
});

app.listen(process.env.PORT || 30000);

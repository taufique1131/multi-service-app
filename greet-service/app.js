// greet-service/app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Greet Service!');
});

app.listen(port, () => {
  console.log(`Greet Service running on port ${port}`);
});


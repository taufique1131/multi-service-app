const express = require('express');
const app = express();
const port = 3000;

app.get('/greet', (req, res) => {
  res.send('Greetings!');
});

app.listen(port, () => {
  console.log(`Greet Service listening at http://localhost:${port}`);
});

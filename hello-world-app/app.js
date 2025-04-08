const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World from EKS!');
});

app.get('/hello', (req, res) => {
    res.send('Hello, World from hello!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


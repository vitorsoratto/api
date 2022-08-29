const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('requisição recebida');
    res.send(true);
});

app.listen(3000);
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Api no ar!'));

app.listen(3000);
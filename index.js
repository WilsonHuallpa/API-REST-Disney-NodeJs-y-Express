const express = require('express');
const bodyParser = require('body-parser');

const apiRouter =  require('./routes/api');
const app = express();

require('./bd');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/api', apiRouter);

app.listen(3003, () => {
    console.log('Servidor arrando!');
});
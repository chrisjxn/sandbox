require('dotenv').config();
const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')

const controller = require('./controllers/controller');

const app = express();
app.use(bodyParser.json());

// app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.get('/api/cars', controller.getCars);
app.get('/api/cars/search', controller.filterCars);

const PORT = 3005;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));

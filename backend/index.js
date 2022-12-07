require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoDB = "mongodb+srv://mymongo:mymongo2022@cluster0.wmguyvd.mongodb.net/test"

const app = express();
const port = 3000;
const routes = require('./v1/routes/routes');

const { Photo } = require('./models/photoSchema')

mongoose.connect(mongoDB);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(cors())
app.use('/api', routes)

app.listen(port, () => {
    console.log(`Running server at ${port}`);
});


'use strict';

const express = require('express');
const handlerIndex = require('./handlers/index.js');

const app = express();
app.use(express.json());// body-parser settings

app.get('/:name', handlerIndex.get);

app.post('/', handlerIndex.post);

module.exports = app;

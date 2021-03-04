const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/', (req, res) => {
    res.status(200).json({error: false, message: 'the api is up'})
});

module.exports = server;
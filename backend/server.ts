const express = require('express');
const server = express();
const path = require('path');
const PORT = process.env.port || 3000

server.use(express.static('dist'));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

server.listen(PORT, () => console.log('listening on port ${PORT}'));

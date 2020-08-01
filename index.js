const config = require('./utils/config');
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(config.port, () => console.log(`Server running on port ${config.port}`))

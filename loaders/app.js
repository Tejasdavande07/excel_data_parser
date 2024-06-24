const express = require("express");
const app = express();
const indexRouter = require("../routes/index");
// initiallise the mongo DB connetion //
// require('../database/mongoose');  // comment because not used //

const http = require("http").createServer(app);
const socketIo = require("socket.io")(http);

require('../socket/socket')(socketIo)
app.set('socketIo',socketIo)


app.use(indexRouter);

module.exports = http;

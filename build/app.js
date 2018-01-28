"use strict";
const express = require("express");
const routes_1 = require("./routes");
class Server {
    constructor() {
        this.app = express();
        this.routes();
    }
    routes() {
        this.app.use('/users', new routes_1.default.users().route);
    }
    get bootstrap() {
        return this.app;
    }
}
module.exports = new Server().bootstrap;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Users {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (req, res) => this.index(req, res));
        this.router.get('/:name', (req, res) => this.show(req, res));
    }
    index(req, res) {
        res.send('Hello Worldだぜ!!!');
    }
    show(req, res) {
        var param = {
            name: req.params.name,
            message: `こんにちは、${req.params.name}さん！！`
        };
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.send(param);
    }
    get route() {
        return this.router;
    }
}
exports.default = Users;

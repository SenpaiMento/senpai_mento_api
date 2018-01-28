import * as express from 'express';

export default class Users {

  private router: express.Router;

  constructor() {
    this.router = express.Router();
    this.router.get('/', (req: express.Request, res: express.Response) => this.index(req, res));
    this.router.get('/:name', (req: express.Request, res: express.Response) => this.show(req, res));
  }

  private index(req: express.Request, res: express.Response): void {
    res.send('Hello Worldだぜ!!!');
  }

  private show(req: express.Request, res: express.Response): void {
    var param = {
      name: req.params.name,
      message: `こんにちは、${req.params.name}さん！！`
    };
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send(param);
  }

  get route(): express.Router {
    return this.router;
  }
}
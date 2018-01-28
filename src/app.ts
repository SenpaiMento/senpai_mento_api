import * as express from 'express';
import routes from './routes';

class Server {

  private app: express.Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  private routes(): void {
    this.app.use('/users', new routes.users().route);
  }

  get bootstrap(): express.Application {
    return this.app;
  }
}

export = new Server().bootstrap;
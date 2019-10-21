import * as express from 'express';
import { Routes } from './routes/routes';

class App {
  public app: express.Application;
  public mainRoutes: Routes = new Routes();

  private config(): void {}

  constructor() {
    this.app = express();
    this.config();
    this.mainRoutes.routes(this.app);
  }
}

export default new App().app;

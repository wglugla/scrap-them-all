import * as express from 'express';
import { Routes } from './routes/routes';
const cors = require('cors');

class App {
  public app: express.Application;
  public mainRoutes: Routes = new Routes();

  private config(): void {}

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.config();
    this.mainRoutes.routes(this.app);
  }
}

export default new App().app;

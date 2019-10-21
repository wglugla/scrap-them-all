import { Request, Response } from 'express';
import { UrlController } from '../controllers/urlController';

export class Routes {
  public urlController: UrlController = new UrlController();

  public routes(app): void {
    app.route('/').get(this.urlController.getImages);
  }
}

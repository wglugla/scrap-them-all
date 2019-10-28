import { Request, Response, Application } from 'express';
import { UrlController } from '../controllers/urlController';

export class Routes {
  public urlController: UrlController = new UrlController();

  public routes(app: Application): void {
    app.route('/').get(this.urlController.getImages);
  }
}

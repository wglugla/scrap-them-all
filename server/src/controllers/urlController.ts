import { Request, Response } from 'express';
import axios from 'axios';

const cheerio = require('cheerio');

export class UrlController {
  public getImages(req: Request, res: Response) {
    const { url } = req.query;
    // res.json(url);
    axios
      .get(url)
      .then(resp => {
        const content = resp.data;
        const $ = cheerio.load(content);
        const urlList = Object.keys($('img')).map(i =>
          $('img')[i].attribs ? `${url}${$('img')[i].attribs.src}` : ''
        );
        res.json(urlList);
      })
      .catch(err => {
        res.json(err);
      });
  }
}

import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import transformUrl from '../helpers/transformUrl';

const cheerio = require('cheerio');

export class UrlController {
  public getImages(req: Request, res: Response, next: NextFunction) {
    let { url } = req.query;
    url = transformUrl(url);
    axios
      .get(url)
      .then(resp => {
        const $ = cheerio.load(resp.data);
        const images = $('img');
        const imagesAttribs = Object.keys(images).map(key => images[key].attribs);
        const data = imagesAttribs.filter(data => data !== undefined);
        data.forEach(d => {
          let fullSrc: string = d.src;
          let regexp: RegExp = /^(http|https):/; //;
          if (fullSrc && !fullSrc.match(regexp)) {
            d.src = d.src.replace(/^/, url);
          }
        });
        res.json(data);
      })
      .catch(err => {
        res.status(500);
        res.json('Something goes wrong! Try again later!');
      });
  }
}

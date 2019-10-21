import * as express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello, scrapper!!'));

app.listen(3000, () => console.log('Start listening on port 3000'));

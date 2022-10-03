import express from 'express';
import logger from 'morgan';
import { randomBytes } from 'crypto';
import cors from 'cors';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.get('/getInfo', (req, res) => {
    res.status(200).json({
        '1234': {
            name: 'Jason',
            description: 'i am jason'
        }
    })
})

app.listen(4000, () => {
    console.log('Listening on port 4000');
  });
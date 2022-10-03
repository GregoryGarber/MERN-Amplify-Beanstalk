import express from 'express';
import logger from 'morgan';
import { randomBytes } from 'crypto';
import cors from 'cors';
import dotenv  from "dotenv";
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config()
const PORT = process.env.PORT || 4000;
const app = express();
let collection;


app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.get('/getInfo', async (req, res) => {
    const result = await collection.find({}).toArray();
    console.log(result)
    res.status(200).json({
        result
    })
})



async function connect() {

    const client = await MongoClient.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,          
    });

    await init(client);
    console.log('connected')
  }

  async function init(client) {
    const db = client.db('Database');
    collection = db.collection('users');
}



await connect();
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
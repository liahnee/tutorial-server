require('dotenv').config();
const pwd = process.env.MONGO_PWD;
const { MongoClient } = require('mongodb');

// Replace the following with your Atlas connection string
const url = `mongodb+srv://liahnee:${pwd}@cluster0.dbcdj.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`;
const client = new MongoClient(url);

const dbName = 'non-player';

async function run() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);

    const col = db.collection('npc');

    // Construct a document
    let personDocument = {
      name: 'Tony',
    };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(personDocument);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

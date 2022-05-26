require('dotenv').config();
const pwd = process.env.MONGO_PWD;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://liahnee:${pwd}@cluster0.dbcdj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  console.log(err);
  client.close();
});

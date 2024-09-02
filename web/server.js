const express = require('express');
const { MongoClient } = require('mongodb');

async function init() {
  const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);
  await client.connect();

  const app = express();
  app.get('/get', async (req, res) => {
    const db = await client.db("adoption")
    const collection = db.collection("pets");

    try {
      // const pets = await collection
      // .find(
      //   { $text: { $search: req.query.search } },
      //   { _id: 0 }
      // )
      // .sort({ score: { $meta: "textScore" } })
      // .limit(10)
      // .toArray();
      const pets = await collection.findOne({ name: req.query.search });

      res.json({ status: "ok", pets }).end;
    } catch (error) {
      res.status(500).json({ status: "error", error }).end;
    }
  });

  const PORT = process.env.PORT || 3000;
  app.use(express.static('./static'));
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

init();
const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");

const uri = "mongodb://ChandraDeepVarma:ZWR0SieuwoPnj869@ac-giiuu2e-shard-00-01.oney9lh.mongodb.net:27017,ac-giiuu2e-shard-00-02.oney9lh.mongodb.net:27017,ac-giiuu2e-shard-00-00.oney9lh.mongodb.net:27017/?authSource=admin&replicaSet=atlas-440tn6-shard-0&ssl=true";
const dataPath = path.join(__dirname, "..", "src", "data", "portfolio.json");

async function seed() {
  console.log("Connecting to MongoDB...");
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB cluster.");

    const db = client.db("portfolio");
    const collection = db.collection("content");

    console.log("Reading initial data from portfolio.json...");
    const rawData = fs.readFileSync(dataPath, "utf8");
    const parsedData = JSON.parse(rawData);

    // Set _id
    parsedData._id = "portfolio_content";

    console.log("Upserting portfolio content document...");
    const result = await collection.replaceOne(
      { _id: "portfolio_content" },
      parsedData,
      { upsert: true }
    );

    console.log("Seeding complete! Modified/Inserted count:", result.upsertedCount || result.modifiedCount || 1);
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
}

seed();

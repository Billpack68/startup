const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const reviewCollection = db.collection('review');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  console.log("Getting user by email");
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  console.log("Getting user by token");
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  console.log("Adding a user");
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  console.log("Updating user");
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addReview(review) {
  console.log("Adding a score");
  return reviewCollection.insertOne(review);
}

function getHighScores() {
  console.log("Getting highscores");
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addReview,
  getHighScores,
};

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
  console.log("Adding a review");
  return reviewCollection.insertOne(review);
}

function getReviews() {
  console.log("Getting reviews");
  const now = new Date();
  const tmr = new Date(now.getTime() + (24 * 60 * 60 * 1000)); // Because of UTC being ahead, probably unneccessary in most cases but oh well
  const past28Days = new Date(now.getTime() - (28 * 24 * 60 * 60 * 1000));

  // console.log("Querying reviews from:", past28Days, "to:", tmr);

  const query = { date: { $gt: past28Days.toISOString(), $lt: tmr.toISOString() } };
  const options = {
    sort: { date : 1},
    limit: 100,
  };
  const cursor = reviewCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addReview,
  getReviews,
};

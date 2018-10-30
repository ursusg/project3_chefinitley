const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const redis = require('redis');
require('dotenv').config();
const by

// Create Redis client
let client = redis.createClient({
  port: process.env.DB_PORT,               // replace with your port
  host: process.env.DB_HOST,        // replace with your hostanme or IP address
  password: process.env.DB_PASSWORD,    // replace with your password
  // optional, if using SSL
  // use `fs.readFile[Sync]` or another method to bring these values in
});

// Connects to Redis
client.on('connect', () => {
  console.log(`Connected to Redis...`)
});

client.on('error', (error) => {
  console.log(error)
  console.log(process.env.DB_PASSWORD)
});

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

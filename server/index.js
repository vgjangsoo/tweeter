
"use strict";

// Basic express setup:

const PORT          = process.env.PORT || 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const {MongoClient} = require("mongodb");
const MONGODB_URI = process.env.MONGODB_URI;
require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//use Mongdo DB
MongoClient.connect(MONGODB_URI, (err, db) => {
  // if error happens
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  const DataHelpers = require("./lib/data-helpers.js")(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);
});


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

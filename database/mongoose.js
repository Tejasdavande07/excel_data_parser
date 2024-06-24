const mongoose = require("mongoose");

const db = mongoose.connection;

mongoose.Promise = global.Promise; // we set the latest promise to mongoose promise //
// mongoose.set("strictQuery", true); // only scjema defined queries are alllowed dur to this //
mongoose.set('debug', true); // Mongoose will log the operations it sends to MongoDB //
// mongoose.set('useCreateIndex', true); // Ensures that Mongoose uses createIndex() instead of the deprecated ensureIndex() for index creation.
// mongoose.set('useFindAndModify', false); // Opts out of using findAndModify() for updates, deletions, and replacements. Instead
// mongoose.set('returnOriginal', false); // Sets the default behavior of findOneAndUpdate() to return the updated document instead of the original


mongoose.connect(process.env.DATABASE_URL + process.env.DATABASE_NAME);

db.on("open", () => {
  console.log("Database succesfully connected");
})
  .on("error", () => {
    console.log("Error connecting to database");
  })
  .on("close", () => {
    console.log("Database disconnected.");
  });

module.exports = mongoose;

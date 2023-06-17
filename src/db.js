const mongoose = require("mongoose");
const URI = "mongodb+srv://krishnaagrawal2992:dNyNDdDWnyxQ5m7y@cluster0.axtup2f.mongodb.net/GearFi?retryWrites=true&w=majority";

const connection = mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

module.exports = connection;

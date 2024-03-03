const mongoose = require("mongoose");
require("dotenv").config();

const connecting = async () => {
  try {
    await mongoose.connect(process.env.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Fetch and log data
    const collection = await mongoose.connection.db.collection("models");
    const data = await collection.find({}).toArray();
    // console.log(data);

    const samplecollection = await mongoose.connection.db.collection("sampledescaimodel");
    const samplecollectiondata = await samplecollection.find({}).toArray();
    console.log(samplecollectiondata)
    // Store data in global variable
    global.modeldata = data;
    global.samplemodeldata = samplecollectiondata;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = {
  connecting,
};



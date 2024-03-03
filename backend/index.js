const express = require("express");
const { connecting } = require("./db");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "API is working now",
  });
});


app.get("/api/modelDetails/:modelName", (req, res) => {
  const modelName = req.params.modelName;
  const modelDetails = global.modeldata.find((model) => model.name === modelName);

  if (modelDetails) {
    res.json({
      name: modelDetails.name,
      desc: modelDetails.desc,
      // Add other details as needed
    });
  } else {
    res.status(404).json({ message: "Model not found" });
  }
});


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(cors());
app.use(express.json())

app.use('/api', require("./Routes/DisplayData"));

app.listen(port, async () => {
  try {
    await connecting();
    console.log("Server is running on port ", port);
  } catch (error) {
    console.log(error);
  }
});

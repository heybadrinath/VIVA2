const express = require("express");
const app = express();
const port = "3000";
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./user.model");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://badri:badri155@heybadrinath.cwapi3z.mongodb.net/Bios?retryWrites=true&w=majority"
    );
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());
app.use(cors());

app.get("/getall", async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});

app.get("/getOne/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ userId: id });
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
});

app.post("/addUser", async (req, res) => {
  try {
    const { userName, userId, gender } = req.body;
    console.log(userName, userId, gender);
    const newUser = new User({ userName, userId, gender });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "internal server error" });
  }
});

app.listen(port, async () => {
  await connect();
  console.log(`server running on port ${port}`);
});

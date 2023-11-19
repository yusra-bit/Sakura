const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');
const bcryptjs = require("bcryptjs");

const MONGO_URI = "mongodb://localhost:27017/blogDB";

// middlerware
app.use(cors());
app.use(express.json());
mongoose.connect(MONGO_URI);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error("Mongodb connnection error", err);
});
db.once("open", () => {
  console.log("Mongodb is connected");
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  const User = mongoose.model("User", userSchema);
  app.post("/register", async (req, res) => {
    try {
     // const hasspassword = await bcryptjs.hashSync(req.body.password, 10);
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error("Error druing registration ", error);
      res.status(500).json({ error: "inter server error" });
    }
  });

app.post('/login', (req,res) => {
  const {email,password} = req.body;
  User.findOne({email:email})
  .then(user => {
    if(user) {
      res.redirect('http://localhost:3000/welcome');
       
    } else {
      res.json("No record existed!")
    }
  })
})
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
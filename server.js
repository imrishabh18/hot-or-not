const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

mongoose
  .connect('mongodb+srv://imrishabh18:1234@hotornot-xmw8q.mongodb.net/test?retryWrites=true&w=majorityt', { useNewUrlParser: true })
  .then(console.log("connected mongoose"))
  .catch(err => console.error(err));

app.listen(PORT ,() => {
    console.log("server running");
})

const schema = new mongoose.Schema({
  gender: Number,
  arr: [
    {
      id: String,
      gender: Number,
      hot: Number,
      not: Number
    }
  ]
});

const horn = mongoose.model("horn",schema);

app.post("/horn", (req, res) => {
  const newHorn = new horn({
    arr: req.body
  });
  console.log(newHorn);
  newHorn.save().then(likes => res.json(likes));
});

app.get("/horn", (req, res) => {
  horn.find().then(likes => res.json(likes))
});

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})}

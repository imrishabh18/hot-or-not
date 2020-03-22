const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

mongoose
  .connect('mongodb+srv://imrishabh18:1234@hotornot-xmw8q.mongodb.net/test?retryWrites=true&w=majorityt', { useNewUrlParser: true })
  .then(console.log("connected mongoose"))
  .catch(err => console.error(err));

app.listen(PORT ,() => {
    console.log("server running");
})
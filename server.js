const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');

//db config

const db = require('./config/keys').mongoURI;


mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

//connect to mongodb
//DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version.To use the new parser, pass option { useNewUrlParser: true } 
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

//First route
app.get('/', (req, res) => res.send('Hello'));

const port = 7000;

app.listen(port, () => console.log(`Server running on port ${port}`));


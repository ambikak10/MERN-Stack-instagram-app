const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const users = require('./routes/api/users');
const passport = require('passport');
const profile = require('./routes/api/profile');

//Body parser configuration
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


//Passport configuration
app.use(passport.initialize());
require('./config/passport')(passport);

//db config
const db = require('./config/keys').mongoURI;

 mongoose.set("useUnifiedTopology", true); //to avoid deprecation warnings
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

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
//app.use('/api/post', posts);

const port = 7000;

app.listen(port, () => console.log(`Server running on port ${port}`));



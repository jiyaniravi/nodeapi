const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/post');

const app = express();
const port = 8080;

const filter = (request, response, nextFilter) => {
    console.log("This filter called !");
    nextFilter();
};

// middleware 
app.use(morgan("dev"));
app.use(filter);
app.use(bodyParser.json());
app.use('/', postRoutes);
app.listen(port, ()=>{ console.log(`Listening on port : ${port}`); });



//DB Connection

// import mongoose
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

console.log('process.env.MONGO_URI : '+process.env.MONGO_URI);

mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
).then(() => console.log('DB Connected'));
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});


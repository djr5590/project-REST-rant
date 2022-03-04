require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() => console.log("DB connected to port 8080"))
.catch((err) => console.error(err));

module.exports.Place = require('./places')
module.exports.Comment = require('./comment');

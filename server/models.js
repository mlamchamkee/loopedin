const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://mlamchamkee:Codesmith2022@cluster0.wunk2ip.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'csf',
})
  .then(() => console.log('Connected to Mongo DB: LoopedIn.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'bios' collection
const baseSchema = new Schema({
  fullName: {type: String, required: true},
  preferredName: String,
  gitHub: {type: String, required: true},
  skills: [String],
  home: String,
  preCodesmith: String,
  goals: String,
  hobbies: String,
  funFact: String,
});


const Bio = mongoose.model('bios', baseSchema);
// exports all the models in an object to be used in the controller
module.exports = { Bio };

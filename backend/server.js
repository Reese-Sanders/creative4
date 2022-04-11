const express = require('express');
const bodyParser = require("body-parser");
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');
// Create a scheme for items in the museum: a title and a path to an image.
const featureSchema = new mongoose.Schema({
  title: String,
  path: String,
  desc: String,
});

const hoursOfOpSchema = new mongoose.Schema({
  hours: [String],
});

const mopedSchema = new mongoose.Schema({
  title: String,
  paths: [String],
  make: String,
  engineSize: String,
  numPeople: Number,
  otherInfo: String,
  price: Number
});

// Create a model for items in the museum.
const Feature = mongoose.model('Feature', featureSchema);
const Hours = mongoose.model('Hours', hoursOfOpSchema);
const Mopeds = mongoose.model('Mopeds', mopedSchema);

// connect to the database
mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});




// **************************** Mopeds API Calls *************************

app.post('/api/mopeds', async (req, res) => {
  console.log("In post mopeds")
  const moped = new Mopeds({
    title: req.body.title,
    paths: req.body.paths,
    make: req.body.make,
    engineSize: req.body.engineSize,
    numPeople: req.body.numPeople,
    otherInfo: req.body.otherInfo,
    price: req.body.price,
  });
  try {
    await moped.save();
    res.send(moped);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/mopeds', async (req, res) => {
  try {
    console.log("In get mopeds");
    let mopeds = await Mopeds.find();
    console.log(mopeds);
    res.send(mopeds);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.param('moped', function (req, res, next, id) {
  console.log(id);
  const query = Mopeds.findById(id);
  query.exec(function (err, moped) {
    if (err || !moped) {
      return next(new Error(`can't find moped with id ${id}`));
    }
    req.moped = moped;
    return next();
  });
});

app.delete('/api/mopeds/:moped', async function (req, res) {
  //let id = parseInt(req.item);
  //console.log(req.item);
  try {
    await Mopeds.deleteOne(req.feature);
    let mopeds = await Mopeds.find();
    console.log(mopeds);
    res.json(req.mopeds);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  
});

app.put('/api/mopeds/:moped', async function (req, res) {
  try {
    let moped = await Mopeds.findOne(req.moped);
    //console.log(item.title);
    //console.log(req.body.title);
    moped.title = req.body.title;
    moped.make = req.body.make;
    moped.engineSize = req.body.engineSize;
    moped.numPeople = req.body.numPeople;
    moped.otherInfo = req.body.otherInfo;
    moped.price = req.body.price;
    moped.save()
    res.json(moped);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// **************************** Hours API Calls *************************

app.put('/api/hours', async (req, res) => {
  console.log("In hours")
  try {
    await Hours.remove({});
    const times = new Hours({
      hours: req.body.hours,
    });
    await times.save();
    console.log(times);
    res.send(times);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/hours', async (req, res) => {
  try {
    console.log("In get hours");
    let currHours = await Hours.find();
    console.log(currHours);
    res.send(currHours);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// **************************** Features API Calls *************************

app.post('/api/feature', async (req, res) => {
  console.log("In feature")
  const feature = new Feature({
    title: req.body.title,
    path: req.body.path,
    desc: req.body.desc,
  });
  try {
    await feature.save();
    res.send(feature);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/feature', async (req, res) => {
  try {
    console.log("In get Features");
    let features = await Feature.find();
    console.log(features);
    res.send(features);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.param('feature', function (req, res, next, id) {
  console.log(id);
  const query = Feature.findById(id);
  query.exec(function (err, feature) {
    if (err || !feature) {
      return next(new Error(`can't find feature with id ${id}`));
    }
    req.feature = feature;
    return next();
  });
});

app.delete('/api/feature/:item', async function (req, res) {
  //let id = parseInt(req.item);
  //console.log(req.item);
  try {
    await Feature.deleteOne(req.feature);
    let features = await Feature.find();
    console.log(features);
    res.json(req.feature);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  
});

app.put('/api/feature/:item', async function (req, res) {
  try {
    let feature = await Feature.findOne(req.feature);
    //console.log(item.title);
    //console.log(req.body.title);
    feature.title = req.body.title;
    feature.desc = req.body.desc;
    feature.save()
    res.json(feature);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



app.listen(3000, () => console.log('Server listening on port 3000!'));
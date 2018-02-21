console.log('halo')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/patients',  { useMongoClient: true, promiseLibrary: require('bluebird') });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

var Patient = require("../models/patient");
app.post('/patients', (req, res) => {
   
    var db = req.db;
    var name = req.body.name;
    var age = req.body.age;
    var reason = req.body.reason;
    var date = req.body.date;
    var description = req.body.description;
    var new_patient = new Patient({
      name: name,
      age: age,
      reason: reason,
      date: date,     
      description: description
    })
  
    new_patient.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Patient admitted successfully!'
      })
    })
  })

  var Patient = require("../models/patient");
  app.get('/patients', (req, res) => {
    Patient.find({}, 'name age reason date description', function (error, patients) {
      if (error) { console.error(error); }
      res.send({
        patients:patients
      })
    }).sort({_id:-1})
  })



app.post('/register',(req,res) =>{
    res.send({
        message: 'Hello ${req.body.email}! Your user was registered! have fun!'

    })
})

app.listen(process.env.PORT || 8081)
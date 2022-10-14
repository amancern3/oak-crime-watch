var express = require('express');
var router = express.Router();
var geoIP = require('geoip-lite');

const app = require('../app');
const { PythonShell } = require('python-shell');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'OAK-CRIME-WATCH' });

  console.log("SPAWNING PY SCRIPT....");

  let options = {
    mode: 'text',
    pythonPath: 'python3',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '/Users/bitterfq/oak-crime-watch/public/scripts/',
  };

  PythonShell.run('oak-crime.py', options, function (err, results) {
    if (err) console.log(err);
    // results is an array consisting of messages collected during execution
    console.log('[SUCCESS] - PROCESSS ENDED %j', results);
  });

});

//use location services
router.use(function (req, res) {
  console.log("LOCATING USER....");
  console.log("YOUR IP %j", process.env.IP);
  var geo = geoIP.lookup(process.env.IP);
  console.log("[LOCATION] - %j" , geo);
})

/*
//middleware export env variables
app.use(function(req, res, next) {
  res.locals.app = app; 
  next();
});
*/

module.exports = router;

var express = require('express');
const app = require('../app');
const { PythonShell } = require('python-shell');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OAK-CRIME-WATCH' });

  console.log("SPAWNING PY SCRIPT.....")
  
  let options = {
      mode: 'text',
      pythonPath: 'python3',
      pythonOptions: ['-u'], // get print results in real-time
      scriptPath: '/Users/bitterfq/oak-crime-watch/public/scripts/',
  };

  PythonShell.run('oak-crime.py', options, function(err, results) {
      if (err) console.log(err);
      // results is an array consisting of messages collected during execution
      console.log('[SUCCESS] - PROCESSS ENDED %j', results);
  });

});

module.exports = router;

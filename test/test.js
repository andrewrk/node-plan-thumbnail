var definition = require('../')
  , Plan = require('plan')
  , assert = require('assert')
  , fs = require('fs')
  , path = require('path')
  , makeTemp = require('temp').path

var tmpFilePath = path.join(__dirname, "logo4w.png");


describe("s3-download", function() {
  it("works", function(done) {
    var task = Plan.createTask(definition, 'thumbnail', 
      {
        "format": "png",
        "width": 220,
        "height": 220,
        "crop": true
      }
    );
    var plan = new Plan();
    plan.addTask(task);
    plan.on('error', function(err) {
      throw err;
    });
    plan.on('end', function(results) {
      console.log(results);
      done();
    });
    plan.start({
      tempPath: tmpFilePath,
      makeTemp: makeTemp
    });
  });
});

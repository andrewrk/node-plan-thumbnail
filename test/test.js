var definition = require('../')
  , Plan = require('plan')
  , assert = require('assert')
  , fs = require('fs')
  , path = require('path')
  , makeTemp = require('temp').path



describe("thumbnail", function() {
  it("works with google logo", function(done) {
    testImage('logo4w.png', done);
  });
  it("works with facebook avatar", function(done) {
    testImage('facebook.gif', done);
  });
});



function testImage(name, done) {
  var tmpFilePath = path.join(__dirname, name);
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
    done();
  });
  plan.start({
    tempPath: tmpFilePath,
    makeTemp: makeTemp
  });
}

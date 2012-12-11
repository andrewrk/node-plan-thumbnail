var imagemagick = require('imagemagick')
  , path = require('path')

var passThroughOpts = [
  'quality',
  'format',
  'progressive',
  'width',
  'height',
  'strip',
  'filter',
  'sharpening',
  'gravity',
];
var hasOwn = {}.hasOwnProperty;

module.exports = {
  start: function(done) {
    var self = this;

    self.options.format = self.options.format || 'png';

    // consume tempPath
    var tempPath = self.context.tempPath;
    delete self.context.tempPath;

    var tempImgFile = self.context.makeTemp({
      suffix: '.' + self.options.format.toLowerCase()
    });

    var options = {
      srcPath: tempPath,
      dstPath: tempImgFile,
    };
    passThroughOpts.forEach(function(opt) {
      if (hasOwn.call(self.options, opt)) {
        options[opt] = self.options[opt];
      }
    });
    var method = self.options.crop ? imagemagick.crop : imagemagick.resize;
    try {
      method(options, onComplete);
    } catch (err) {
      done(err);
    }
    function onComplete(err) {
      if (err) {
        done(err);
      } else {
        self.context.tempPath = tempImgFile;
        done();
      }
    }
  }
};

var imagemagick = require('imagemagick')
  , path = require('path')

module.exports = {
  start: function(done) {
    var self = this;

    self.settings.format = self.settings.format || 'png';

    // consume tempPath
    var tempPath = self.context.tempPath;
    delete self.context.tempPath;

    var tempImgFile = self.context.makeTemp({
      suffix: '.' + self.settings.format.toLowerCase()
    });

    var options = {
      srcPath: tempPath,
      dstPath: tempImgFile,
      quality: self.options.quality,
      format: self.options.format,
      progressive: self.options.progressive,
      width: self.options.width,
      height: self.options.height,
      strip: self.options.strip,
      filter: self.options.filter,
      sharpening: self.options.sharpening,
      gravity: self.options.gravity,
    };
    var method = self.settings.crop ? imagemagick.crop : imagemagick.resize;
    method(options, function(err) {
      if (err) {
        done(err);
      } else {
        self.context.tempPath = tempImgFile;
        done();
      }
    });
  }
};

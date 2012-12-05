See [node-plan](https://github.com/superjoe30/node-plan).

Backend is [node-imagemagick](https://github.com/rsms/node-imagemagick).

### input

  * `tempPath` - image to generate a thumbnail for
  * `makeTemp` - a function which generates a tempfile and accepts a suffix

### output

  * `tempPath` - path to the generated thumbnail

### options

  * `format` - what format to save in, such as 'jpg'. defaults to 'png'.
  * `quality` - between 0 and 1. only applies for some formats.
  * `progressive` - boolean
  * `width` - width of thumbnail
  * `height` - height of thumbnail
  * `strip` - boolean
  * `filter`
  * `sharpening`
  * `gravity` - one of ['NorthWest', 'North', 'NorthEeast', 'West', 'Center', 'East', 'SouthWest', 'South', 'SouthEast']
  * `crop` - boolean

### exports

  * `bucket` - copied directly from options

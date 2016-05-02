var webpack = require('webpack')
var glob = require('glob');
var path = require('path')
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var entry = {};
glob.sync('src/**/js/page/*.js')
  .forEach(function(src) {
    var name = src.replace(/^src\//, '');
    var dist = src.replace(/^src\//, './src/');
    entry[name] = dist;
  });

module.exports = {
  entry: entry,
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    
    ]
  }
}

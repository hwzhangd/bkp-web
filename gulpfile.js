var webpack = require('webpack');
var webpackConfig = require(`${__dirname}/webpack.js`);
var gulp = require('gulp');

if ('production' !== process.NODE_ENV) {
  var browserSync = require('browser-sync');
}

gulp.task('serve', function(){
  browserSync({
    notify: false,
    port: 9000,
    open: false,
    online: false,
    ghostMode: false,
    server: {
      baseDir: ['.tmp','src'],
    }
  });
  
  webpackConfig.watch = true;
  webpackConfig.watchOptions = {};
  webpackConfig.watchOptions.aggregateTimeout = 0;
  webpackConfig.devtool = 'source-map';
  
  var lastHash
  webpack(webpackConfig, function(error, stats) {
    browserSync.reload();
    if (!error && stats.hash === lastHash) {
      return
    }
    lastHash = stats.hash
    process.stdout.write(stats.toString({
      colors: true,
      cached: false
    }));
    process.stdout.write('\n');
  });


});


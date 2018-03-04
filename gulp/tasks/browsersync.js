var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config').browser;

gulp.task('browser-sync', function() {
    browserSync({
        server: {
          baseDir: config.dir,
          index  : config.index
        }
    });
});

gulp.task('browser-reload',function(){
  browserSync.reload();
});
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var stripDebug = require( 'gulp-strip-debug' );
var config = require('../config').opt;


gulp.task('optimg',function(){
  gulp.src(config.jpg)
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(gulp.dest(config.dest+'/img'));
  gulp.src(config.png)
  .pipe(imagemin())
  .pipe(gulp.dest(config.dest+'/img'));
});


gulp.task('optjs',function(){
  gulp.src(config.js)
  .pipe(stripDebug())
  .pipe(uglify())
  .pipe(gulp.dest(config.dest+'/js'));
});

gulp.task('optcss',function(){
  gulp.src(config.css)
  .pipe(cleanCss())
  .pipe(gulp.dest(config.dest+'/css'));
});
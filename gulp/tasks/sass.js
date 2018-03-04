var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config').sass;
var pleeease = require('gulp-pleeease');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass',function(){
	gulp.src(config.src)
  .pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
  .pipe(pleeease({
    autoprefixer:config.prefixer,
    minifier:config.minify
  }))
  .pipe(sourcemaps.write(config.maps))
	.pipe(gulp.dest(config.dest))
});
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config').ejs;
var develop = {
  'ejs':config.src,
  'data': './src/ejs/assets/'
}

var release = {
  'html': config.dest
}
var fs = require('fs');

gulp.task('ejs',function(){
  gulp.src(config.src, {base: './src/'})
    .pipe($.plumber())
    .pipe($.data(file=>{
      return{
        'filename':file.path
      }
    }))
    .pipe($.ejs({
      site: JSON.parse(fs.readFileSync(develop.data + 'site.json'))
      },
      {ext: '.html'}))
    .pipe($.rename({extname:'.html'}))
    .pipe(gulp.dest(config.dest))
});
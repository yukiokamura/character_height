/*******************

*******************/

var dest = './www';
var src = './src';

var path = require('path');
var relativeSrcPath = path.relative('.', src);

var config = {
	project:'www',
	dest:dest,
	src:src,
	watch:{
		dest:[dest+'/**/*','!'+dest+'/js/*'],
		sass:relativeSrcPath+'/**/*.scss',
		ejs:relativeSrcPath+'/**/*.ejs'
	},
	ejs:{
		dest:dest,
		src:[src+'/*.ejs',src+'/**/*.ejs','!src/ejs/_*.ejs']
	},
	sass:{
		dest:dest+'/css',
		src:src+'/sass/*.scss',
		prefixer:{
			browsers:['last 2 versions']
		},
		maps:'/maps',
		minify:false
	},
	browser:{
		dir:'./www/',
		index:'index.html'
	},
	opt:{
		js:dest+'/js/**/*.js',
		css:dest+'/css/*.css',
		png:dest+'/img/*.png',
		jpg:dest+'/img/*.jpg',
		dest:dest
	}
};

module.exports = config;

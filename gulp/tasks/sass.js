var gulp 			= require('gulp'),
	sass    		= require('gulp-ruby-sass'),
	autoprefixer	= require('gulp-autoprefixer'),
	config 			= require('../config');


gulp.task('sass', function() {
  
  var sassConfig = config.sass.options.dev;

  return sass(config.sass.src, sassConfig)
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.sass.dest));
});


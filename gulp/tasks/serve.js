var gulp = require('gulp'),
	bs = require('browser-sync').create(),
	config 	= require('../config');
	

gulp.task('serve', function () {
    
    bs.init({
		proxy: 'algaecal.imac',
		ui : false
	});
	
	gulp.watch('./css/style.css').on('change', bs.reload);
	
});


var gulp 			= require('gulp'),
	runSequence		= require('run-sequence'),
	config 			= require('../config');
	

gulp.task('default',['sass','watch']);


gulp.task('build', function(){
	runSequence('sass','watch','serve');
});

var gulp 			= require('gulp'),
	runSequence		= require('run-sequence'),
	config 			= require('../config');
	

gulp.task('default',['sass','watch']);


/*
gulp.task('style', function(){
	runSequence('sass','watch','serve');
});
*/
gulp.task('style', function(){
	runSequence('sass','watch','serve');
});

require('./gulp/gulp-styles');

var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	watch = require('gulp-watch');


gulp.task('watch', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'app'
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});

	watch('./app/styles/*.css', function() {
		gulp.start('cssInject');
	});

	//watch('./app/scripts/**/*.js', function() {
	//	browserSync.reload();
	//	gulp.start('scriptsRefresh');		// to define!!
	//});
});


gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/temp-styles/main.css')
			   .pipe(browserSync.stream());
});

//insert scriptsRefresh here
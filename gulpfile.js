var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var del = require('del');
var less = require('gulp-less');
var rebaseUrls = require('gulp-css-rebase-urls');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var runSequence = require('run-sequence');

gulp.task('default', function() {
	runSequence("clean", "js", '3rd-party-css', 'app-css')
});
gulp.task('watch', ['js-watch'], function() {
	runSequence('js-watch')
});

gulp.task('clean', function(){
	del('./app/dist');
});

gulp.task('3rd-party-css', function(){
  gulp.src(["./app/bower_components/bootstrap/dist/css/bootstrap.css"])
    .pipe(rebaseUrls())
    .pipe(concatCss('3rd-party.css', {rebaseUrls:false}))
    .pipe(minifyCss({keepBreaks:true}))
    .pipe(gulp.dest('./app/dist/css'))
});
gulp.task('app-css', function () {
  return gulp.src(['./app/*.less', './app/components/**/*.less'])
    .pipe(less())
    .pipe(concatCss('app.css', {rebaseUrls:false}))
    .pipe(minifyCss({keepBreaks:true}))
    .pipe(gulp.dest('./app/dist/css'))
});

gulp.task('js', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './app/app.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app/dist/js'));
});

gulp.task('js-watch', function () {
	var b = watchify(browserify({
		entries: './app/app.js',
		debug: true,
		cache: {},
		packageCache: {}
	}));
	b.on('update', function(){
		rebundle(b);
	});
	b.on('log', gutil.log);
	b.on('error', gutil.log);
	
	var rebundle = function(b){
		return b.bundle()
	    .pipe(source('app.js'))
	    .pipe(buffer())
	    .pipe(sourcemaps.init({loadMaps: true}))
	        // Add transformation tasks to the pipeline here.
	        .pipe(uglify())
	        .on('error', gutil.log)
	    .pipe(sourcemaps.write('./'))
	    .pipe(gulp.dest('./app/dist/js'))
	}
	return rebundle(b);
});
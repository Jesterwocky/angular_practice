var gulp = require('gulp');
var jshint = require("gulp-jshint");

var config = { js: "js/**/*.js" };

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task("vet", function() {
  return gulp.src([config.js])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'), {verbose: true})
    .pipe(jshint.reporter('fail'));
});

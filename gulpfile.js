const gulp        = require('gulp'),
      jshint      = require('gulp-jshint'),
      babel       = require('gulp-babel'),
      sourcemaps  = require('gulp-sourcemaps'),
      concat      = require('gulp-concat'),
      uglify      = require('gulp-uglify'),
      browserSync = require('browser-sync');

const jsSource = "src/**/*.js";

gulp.task('default', ["watch"]);

gulp.task("watch", ["jshint", "browser-sync"], () => {
  gulp.watch(jsSource, ["scripts"]).on("change", browserSync.reload);
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("scripts", () => {
  gulp.src(jsSource)
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ["es2015"] }))
    .pipe(concat("app.min.js"))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest("build/"));
});

gulp.task("jshint", () => {
  return gulp.src(jsSource)
  .pipe(jshint())
  .pipe(jshint.reporter("jshint-stylish"));
});

gulp.task("browser-sync", () => {
  browserSync.init({
    server: {baseDir: "./"}
  });
});

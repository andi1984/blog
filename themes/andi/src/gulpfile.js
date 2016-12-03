var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clear', function () {
  return gulp.src('../static/**', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('css', ['clear'], function () {
  var sass = require('gulp-sass');
  var sourcemaps = require('gulp-sourcemaps');
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      'includePaths': ['node_modules/normalize-scss/sass/']
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('../static/css'));
});

gulp.task('default', ['clear', 'css'], function () {
});

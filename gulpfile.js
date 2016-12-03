var gulp = require('gulp');
var clean = require('gulp-clean');
var path = require('path');
var basePath = './themes/andi/src';

gulp.task('clear', function () {
  return gulp.src(
    path.join(
      path.resolve(basePath, '../static'),
      '/**'
    ), { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('css', ['clear'], function () {
  var sass = require('gulp-sass');
  var sourcemaps = require('gulp-sourcemaps');
  return gulp.src(path.resolve(path.join(basePath, 'sass'), '**/*.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass({
      'includePaths': ['./node_modules/normalize-scss/sass/']
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(path.resolve(basePath, '../static/css')));
});

gulp.task('default', ['clear', 'css'], function () {
});

var gulp = require('gulp');
var clean = require('gulp-clean');
var path = require('path');
var basePath = './themes/andi/src';

/**
 * Function returns true if gulp task is running in production mode
 * @returns {boolean} 
 */
var isProductionMode = function () {
  return process.argv.indexOf("--production") !== -1;
};

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
  var cleanCSS = require('gulp-clean-css');
  var gulpif = require('gulp-if');
  return gulp.src(path.resolve(path.join(basePath, 'sass'), '**/*.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass({
      'includePaths': ['./node_modules/normalize-scss/sass/']
    }).on('error', sass.logError))
    .pipe(gulpif(isProductionMode, cleanCSS()))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(path.resolve(basePath, '../static/css')));
});

gulp.task('js', ['clear'], function () {
  return gulp.src(path.resolve(basePath, '**/*.js'))
    .pipe(gulp.dest(path.resolve(basePath, '../static')));
});

gulp.task('default', ['clear', 'css', 'js'], function () { });

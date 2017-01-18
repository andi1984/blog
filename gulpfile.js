// Custom constants
const basePath = './themes/andi/src';

// Requirements
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const execSync = require('child_process').execSync;
const gulp = require('gulp');
const gulpif = require('gulp-if');
const path = require('path');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

/**
 * Function returns true if gulp task is running in production mode
 * @returns {boolean} 
 */
var isProductionMode = function () {
  return process.argv.indexOf("--production") !== -1;
};

/**
 * Clears the static folder.
 */
gulp.task('clear', function () {
  return del([
    path.join(
      path.resolve(basePath, '../static'),
      '/**',
      '/*'
    )
  ]);
});

/**
 * Builds all our CSS
 */
gulp.task('css', ['clear'], function () {
  return gulp.src(path.resolve(path.join(basePath, 'sass'), '**/*.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass({
      'includePaths': ['./node_modules/normalize-scss/sass/']
    }).on('error', sass.logError))
    .pipe(gulpif(isProductionMode, cleanCSS()))
    .pipe(autoprefixer({
      browsers: ['last 10 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.resolve(basePath, '../static/css')));
});

/**
 * Builds all our JavaScript
 */
gulp.task('js', ['clear'], function () {
  return gulp.src(path.resolve(basePath, '**/*.js'))
    .pipe(gulp.dest(path.resolve(basePath, '../static')));
});

/**
 * Builds everything (JS and CSS)
 */
gulp.task('default', ['clear', 'css', 'js'], function () { });

/**
 * Gulp watch task. Use it during development.
 */
gulp.task('watch', ['default'], function () {
  gulp.watch(path.resolve(basePath, 'sass', '**', '*.scss'), ['css'])
  gulp.watch(path.resolve(basePath, '**/*.js'), ['js'])
});

/**
 * Fast upgrade of existing NPM packages. Use it wisely!
 */
gulp.task('upgrade', function () {
  execSync(`./${path.join('node_modules', '.bin', 'ncu')} -u`, { stdio: [0, 1, 2] });
  execSync(`npm i`, { stdio: [0, 1, 2] });
});

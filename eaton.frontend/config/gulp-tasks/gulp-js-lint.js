'use strict';
/*
* Gulp Task: Lint Javascript Files
*/

const path = require('path');
const gulpEslint = require('gulp-eslint');
const gutil = require('gulp-util');

const configFile = require(path.resolve('./', '.eslintrc.js'));

const lintJS = function(gulp, CONFIG, bundle) {
  return function() {

    return gulp.src([
      path.join('./', 'config/gulp-tasks/*.js'),

      CONFIG.paths.src.components.content + '/**/js/*.js',
      CONFIG.paths.src.components.structure + '/**/js/*.js',

      // NOTE: Ignore OLD JS Files inside 'clientlibs' folders
      '!' + CONFIG.paths.src.components.content + '/**/clientlib/js/*.js',
      '!' + CONFIG.paths.src.components.structure + '/**/clientlib/js/*.js'
    ])
      .pipe(gulpEslint(configFile))
      .pipe(gulpEslint.format())
      .pipe(gulpEslint.results(function( results ) {
        let count = results.warningCount + results.errorCount;
        if (count > 0) {
          gutil.log( gutil.colors.white.bgRed.bold(` ${ count } - ESLint Errors! `));
        }
      }));
  };
};


module.exports = lintJS;

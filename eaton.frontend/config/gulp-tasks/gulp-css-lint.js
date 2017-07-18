'use strict';
/*
* Gulp Task: Lint scss Files
*/

const path = require('path');
const sassLint = require('gulp-sass-lint');
const configFile = require(path.resolve('./', '.sasslint-config.js'));
const plumber = require('gulp-plumber');

const lintCSS = function(gulp, CONFIG) {
  return function() {

    // Lint SASS
    //--------------
    gulp.src([
      path.resolve(CONFIG.paths.srcRoot) + '/**/*.scss'

      // Ignore Vendor Libs
      // '!' + path.join(CONFIG.paths.srcRoot, '/global/css/vendors/**/*.scss'),
      // '!' + path.join(CONFIG.paths.srcRoot, '/global/css/vendors/**/*.css')
    ])
      .pipe(plumber())
      // .pipe(sassLint({ configFile: '.scsslint.yml' }))
      .pipe(sassLint( configFile ))
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError());

  };
};

module.exports = lintCSS;

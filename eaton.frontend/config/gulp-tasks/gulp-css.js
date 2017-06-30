'use strict';

/*
* Gulp Task: Transform SASS to CSS
*/

const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlobbing = require('node-sass-globbing');

const sassToCSS = function(gulp, CONFIG) {
  return function() {

    // Compile SASS to CSS
    gulp.src([CONFIG.paths.styles.srcFolder + '/**/*.scss'])
      .pipe(sass({
        outputStyle: 'compact',
        importer: sassGlobbing
      }))
      .on('error', sass.logError)
      .pipe(gulp.dest(CONFIG.paths.styles.destFolder));

  }
}

module.exports = sassToCSS;

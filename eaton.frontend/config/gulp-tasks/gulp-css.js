'use strict';
/*
* Gulp Task: Transform SASS to CSS
*/

const sass = require('gulp-sass');
const sassGlobbing = require('node-sass-globbing');

const sassToCSS = function(gulp, CONFIG, bundle) {
  return function() {

    // SASS to CSS
    //--------------
    gulp.src([
      CONFIG.paths.src.scss + '/style.scss'
    ])
      .pipe(sass({
        includePaths: [
          'node_modules'
        ],
        outputStyle: 'compact',
        importer: sassGlobbing
      }))
      .on('error', sass.logError)
      .pipe(gulp.dest(CONFIG.paths.destAEM.css));

  };
};


module.exports = sassToCSS;

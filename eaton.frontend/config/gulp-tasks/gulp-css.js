'use strict';
/*
* Gulp Task: Transform SASS to CSS
*/

// const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sassGlobbing = require('node-sass-globbing');
const autoprefixer = require('gulp-autoprefixer');

const sassToCSS = function(gulp, CONFIG) {
  return function() {

    // SASS to CSS
    //--------------
    gulp.src([
      CONFIG.paths.srcRoot + '/**/*.scss'
    ])
      // .pipe(plumber())
      .pipe(sass({
        includePaths: [
          'node_modules'
        ],
        outputStyle: 'compact',
        importer: sassGlobbing
      }))
      .on('error', sass.logError)

      // Config file: ./eaton.frontend/browserslist
      .pipe(autoprefixer({ remove: false }))
      .pipe(gulp.dest( CONFIG.paths.destAEM.clientlibStatic ));

  };
};


module.exports = sassToCSS;

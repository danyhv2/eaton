'use strict';
/*
* Gulp Task: Transform SASS to CSS
*/

// const gulp = require('gulp');
// const path = require('path');
const sass = require('gulp-sass');
const sassGlobbing = require('node-sass-globbing');

const sassToCSS = function(gulp, CONFIG, bundle) {
  return function() {

    let srcFolders;
    let destAEM;

    // Config: GLOBAL-CSS
    //--------------
    if (bundle === 'global') {
      srcFolders = [
        CONFIG.paths.src.global + '/**/*.scss'
      ];

      destAEM = CONFIG.paths.destAEM.global;
    }


    // Config: COMPONENTS-CSS
    //--------------
    if (bundle === 'components') {
      srcFolders = [
        CONFIG.paths.src.components.content + '/**/*.scss',
        CONFIG.paths.src.components.structure + '/**/*.scss'
      ];

      destAEM = CONFIG.paths.destAEM.components;
    }


    // SASS to CSS
    //--------------
    const stream = gulp.src(srcFolders)
      .pipe(sass({
        includePaths: [
          'node_modules',
          './src'
        ],
        outputStyle: 'compact',
        importer: sassGlobbing
      }))
      .on('error', sass.logError)
      .pipe(gulp.dest(destAEM));

  }
}

  };
};


module.exports = sassToCSS;

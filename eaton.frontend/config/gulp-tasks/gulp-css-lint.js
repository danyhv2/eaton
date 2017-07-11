'use strict';
/*
* Gulp Task: Lint scss Files
*/

// const path = require('path');
const sassLint = require('gulp-sass-lint');
// const configFile = require(path.resolve('./', '.scsslint.yml'));

const lintCSS = function(gulp, CONFIG) {
  return function() {

    // Lint SASS
    //--------------
    gulp.src([

      CONFIG.paths.srcRoot + '/**/*.scss',

      // Ignore Vendor Libs
      '!' + CONFIG.paths.srcRoot + '/**/vendors/**/*.(scss|css)'

    ])
      .pipe(sassLint({ configFile: '.scsslint.yml' }))
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError());
  };
};

module.exports = lintCSS;

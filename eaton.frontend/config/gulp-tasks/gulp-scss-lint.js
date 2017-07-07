'use strict';
/*
* Gulp Task: Lint scss Files
*/

// const path = require('path');
const sassLint = require('gulp-sass-lint');
// const configFile = require(path.resolve('./', '.scsslint.yml'));

const lintCSS = function(gulp, CONFIG) {
  return function() {

    return gulp.src([
      CONFIG.paths.src.global + '/**/*.scss',
      CONFIG.paths.src.components.content + '/**/*.scss',
      CONFIG.paths.src.components.structure + '/**/*.scss',

      // Ignore these folders
      '!' + CONFIG.paths.src.global + '/css/vendor/**/*.scss'
    ])
      .pipe(sassLint({ configFile: '.scsslint.yml' }))
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError());
  };
};

module.exports = lintCSS;

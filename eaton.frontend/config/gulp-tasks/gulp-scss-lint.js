'use strict';
/*
* Gulp Task: Lint scss Files
*/

const path = require('path');
const sassLint = require('gulp-sass-lint');
// const configFile = require(path.resolve('./', '.scsslint.yml'));

const scssJS = function(gulp, CONFIG) {
  return function() {

    return gulp.src(CONFIG.paths.src.global + '/**/*.s+(a|c)ss')
              .pipe(sassLint({ configFile: '.scsslint.yml' }))
              // .pipe(sassLint({
              //   files: {
              //     ignore: CONFIG.paths.src.global + '/css/vendor/*.s+(a|c)ss'
              //   }}))
              .pipe(sassLint.format())
              .pipe(sassLint.failOnError())
  };
};

module.exports = scssJS;
// rules:
//   class-name-format:
//   - 1
//   -
//     allow-leading-underscore: true
//     convention: hyphenatedbem

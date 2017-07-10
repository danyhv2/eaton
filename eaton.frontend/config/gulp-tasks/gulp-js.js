'use strict';
/*
* Gulp Task: Transform Javascript Files
*/

const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');

const babelOptions = {

  // NOTE: gulp-babel -> Build Error: Couldn't find preset "es2015" relative to directory #93
  // FIX -> Use NPM package names. More Info: https://github.com/babel/gulp-babel/issues/93#issuecomment-249172581
  presets: [
    'babel-preset-es2015'
  ].map(require.resolve)

};


const buildJS = function(gulp, CONFIG, bundle) {
  return function() {

    // Build JS
    //--------------
    gulp.src([
      CONFIG.paths.src.js + '/**/*.js'
    ])
      .pipe(plumber())
      .pipe(babel(babelOptions))
      .on('error', (err) => {
        gutil.log(
          gutil.colors.red.bold('[Javascript Build Error]'),
          err.message
        );
      })
      .pipe(gulp.dest(CONFIG.paths.destAEM.js));

  };
};


module.exports = buildJS;

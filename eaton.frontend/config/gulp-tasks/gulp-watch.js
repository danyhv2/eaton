'use strict';
/**
* Gulp Task: Watch for File Changes
*/

// const path = require('path');
const gutil = require('gulp-util');

const watch = function (gulp, CONFIG) {

  gutil.log(gutil.colors.green.bold('Watching Files...'));

  // Watch: SASS
  gulp.watch([
    CONFIG.paths.srcRoot + '/**/*.scss'
  ], ['css', 'lint:css']
  );

  // Watch: JS
  gulp.watch([
    CONFIG.paths.srcRoot + '/**/*.js'
  ], ['js', 'lint:js']
  );


};

module.exports = watch;

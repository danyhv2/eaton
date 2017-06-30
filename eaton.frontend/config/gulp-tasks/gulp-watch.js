'use strict';

/**
* Gulp Task: Watch for File Changes
*/

const path = require('path');
const gutil = require('gulp-util');

const watch = function (gulp, CONFIG) {

  gutil.log(gutil.colors.green.bold('Watching Files...'));

  // Watch: SASS
  gulp.watch(CONFIG.paths.styles.srcFolder + '/**/*.scss', ['css']);

  // Watch: JS
  // TBD...
  gulp.watch([
    path.join(CONFIG.paths.js.srcFolder, '/**/*.js'),
    path.join(CONFIG.paths.js.srcFolder, '/**/*.jsx')
  ],
  ['js']
  );

};

module.exports = watch;

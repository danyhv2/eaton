'use strict';
/**
* Gulp Task: Watch for File Changes
*/

// const path = require('path');
const gutil = require('gulp-util');

const watch = function (gulp, CONFIG) {

  gutil.log(gutil.colors.green.bold('Watching Files...'));

  // Watch: SASS Global
  gulp.watch([
    CONFIG.paths.src.global + '/**/*.scss'
  ], ['css:global']
  );

  // Watch: SASS Components
  gulp.watch([
    CONFIG.paths.src.components.content + '/**/*.scss',
    CONFIG.paths.src.components.structure + '/**/*.scss'
  ], ['css:components']
  );


  // Watch: JS Global
  gulp.watch([
    CONFIG.paths.src.global + '/**/*.js'
  ], ['js:global']
  );

  // Watch: JS Components
  gulp.watch([
    CONFIG.paths.src.components.content + '/**/js/*.js',
    CONFIG.paths.src.components.structure + '/**/js/*.js',

    // NOTE: Ignore OLD JS Files inside 'clientlibs' folders
    '!' + CONFIG.paths.src.components.content + '/**/clientlib/js/*.js',
    '!' + CONFIG.paths.src.components.structure + '/**/clientlib/js/*.js'
  ], ['js:components']
  );

};

module.exports = watch;

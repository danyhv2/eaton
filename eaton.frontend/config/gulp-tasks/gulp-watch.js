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

'use strict';

const gulp = require('gulp');

// Environment Constants
const CONFIG = require('./config/eaton-config');


// TASK: Clean Folders
//--------------
gulp.task('clean',
  require('./config/gulp-tasks/gulp-clean')(gulp, CONFIG)
);


// TASKS: LINT Source Code
//--------------

// SASS-Lint
gulp.task('lint:css',
  require('./config/gulp-tasks/gulp-css-lint')(gulp, CONFIG)
);

// ESLint
gulp.task('lint:js',
  require('./config/gulp-tasks/gulp-js-lint')(gulp, CONFIG)
);


// TASK: Compile SASS to CSS
//--------------
gulp.task('css:build',
  require('./config/gulp-tasks/gulp-css')(gulp, CONFIG)
);


// TASKS: JavaScript
//--------------
gulp.task('js:build',
  require('./config/gulp-tasks/gulp-js')(gulp, CONFIG)
);


// TASK: Build Glyphicon Font
//--------------
gulp.task('iconfont',
  require('./config/gulp-tasks/gulp-glyphicon-font')(gulp, CONFIG)
);

// TASK: Build Image Sprite - Flags
//--------------
gulp.task('sprite',
  require('./config/gulp-tasks/gulp-sprites')(gulp, CONFIG)
);

// Shortcuts for Common Tasks
//--------------
gulp.task('lint', ['lint:css', 'lint:js']);
gulp.task('css', ['css:build', 'lint:css']);
gulp.task('js', ['js:build', 'lint:js']);




// Build For Local Development
//--------------
gulp.task('dev', [
  // 'clean',
  'css:build',
  'js:build',
  'lint:css',
  'lint:js'
]);



// Build for Prod Servers
// TODO: TBD: For production builds Add minifcation, hashes, cleanup folders etc
//--------------
gulp.task('prod', [
  // 'clean',
  'css:build',
  'js:build',
  'lint:css',
  'lint:js'
]);



// Default Development Task
//--------------
gulp.task('default', ['dev'], () => {

  // Watch for File Changes
  require('./config/gulp-tasks/gulp-watch')(gulp, CONFIG);
});

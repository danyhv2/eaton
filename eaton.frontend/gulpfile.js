'use strict';

const gulp = require('gulp');

// Environment Constants
const CONFIG = require('./config/eaton-config');


// TASK: Clean Folders
//--------------
gulp.task('clean',
  require('./config/gulp-tasks/gulp-clean')(gulp, CONFIG)
);


// TASKS: Linting
//--------------

// SASS-Lint
gulp.task('lint:css',
  require('./config/gulp-tasks/gulp-css-lint')(gulp, CONFIG)
);

// ESLint
gulp.task('lint:js',
  require('./config/gulp-tasks/gulp-js-lint')(gulp, CONFIG)
);


// TASKS: Compile SASS to CSS
//--------------
gulp.task('css:build',
  require('./config/gulp-tasks/gulp-css')(gulp, CONFIG)
);


// TASKS: JavaScript
//--------------
gulp.task('js:build',
  require('./config/gulp-tasks/gulp-js')(gulp, CONFIG)
);


// Shortcuts for Common Tasks
//--------------
gulp.task('lint', ['lint:css', 'lint:js']);
gulp.task('css', ['lint:css', 'css:build']);
gulp.task('js', ['js:css', 'js:build']);




// Build For Local Development
//--------------
gulp.task('build:dev', [
  // 'clean',
  'css:build',
  'js:build',
  'lint:css',
  'lint:js'
]);



// Build for Prod Servers
// TODO: For production builds Add minifcation, hashes, cleanup folders etc
//--------------
gulp.task('build:prod', [
  // 'clean',
  'css:build',
  'js:build',
  'lint:css',
  'lint:js'
]);



// Default Development Task
//--------------
gulp.task('default', ['build:dev'], () => {

  // Watch for File Changes
  require('./config/gulp-tasks/gulp-watch')(gulp, CONFIG);
});

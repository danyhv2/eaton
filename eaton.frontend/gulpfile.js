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
gulp.task('css',
  require('./config/gulp-tasks/gulp-css')(gulp, CONFIG)
);


// TASKS: JavaScript
//--------------
gulp.task('js',
  require('./config/gulp-tasks/gulp-js')(gulp, CONFIG)
);



// Build For Local Development
//--------------
gulp.task('build:dev', [
  'clean',
  'css',
  'js',
  'lint:css',
  'lint:js'
]);



// Build for Prod Servers
//--------------
gulp.task('build:prod', [
  'clean',
  'css',
  'js',
  'lint:css',
  'lint:js'
]);



// Default Development Task
//--------------
gulp.task('default', ['build:dev'], () => {

  // Watch for File Changes
  require('./config/gulp-tasks/gulp-watch')(gulp, CONFIG)
});

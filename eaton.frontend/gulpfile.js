'use strict';

const gulp = require('gulp');

// Environment Constants
const CONFIG = require('./config/eaton-config');


// TASK: Clean Folders
//--------------
gulp.task('clean',
  require('./config/gulp-tasks/gulp-clean')(gulp, CONFIG)
);



// TASKS: Compile SASS to CSS
//--------------
gulp.task('css:global',
  require('./config/gulp-tasks/gulp-css')(gulp, CONFIG, 'global')
);

gulp.task('css:components',
  require('./config/gulp-tasks/gulp-css')(gulp, CONFIG, 'components')
);

// Alias for All CSS tasks
gulp.task('css', ['css:global', 'css:components']);



// TASKS: JavaScript
//--------------
gulp.task('js:global',
  require('./config/gulp-tasks/gulp-js')(gulp, CONFIG, 'global')
);

gulp.task('js:components',
  require('./config/gulp-tasks/gulp-js')(gulp, CONFIG, 'components')
);

// ESLint
gulp.task('lint:js',
  require('./config/gulp-tasks/gulp-js-lint')(gulp, CONFIG)
);

// Alias for common JS tasks
gulp.task('js', ['js:global', 'js:components']);



// Build For Local Development
//--------------
gulp.task('build:dev', [
  'clean',
  'css',
  'js',
  'lint:js'
]);



// Build for Prod Servers
//--------------
gulp.task('build:prod', [
  'clean',
  'css',
  'js',
  'lint:js'
]);



// Default Development Task
//--------------
gulp.task('default', ['build:dev'], () => {

  // Watch for File Changes
  require('./config/gulp-tasks/gulp-watch')(gulp, CONFIG)
});

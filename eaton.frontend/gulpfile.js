'use strict';

const gulp = require('gulp');

// Environment Constants
const CONFIG = require('./config/eaton-config');


// Custom Gulp Tasks
//--------------

// Compile SASS to CSS
gulp.task('css', require('./config/gulp-tasks/gulp-css')(gulp, CONFIG));


// Watch for File Changes
gulp.task('watch', function() {
  require('./config/gulp-tasks/gulp-watch')(gulp, CONFIG);
});


// Default Development Task
//--------------
gulp.task('default', [
  'css',
  'watch'
]);

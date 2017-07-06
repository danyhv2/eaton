'use strict';
/*
* Gulp Task: Cleans folders before running new builds
*/

const del = require('del');
const path = require('path');


const cleanAEM = function(gulp, CONFIG) {
  return function() {

    del([
      './eaton.frontend/build', // NOTE: Old Build Folder, It should be removed once merged into `master` branch

      // Delete Files, Not folders
      path.join(CONFIG.paths.destAEM.global, '/**/*'),
      path.join(CONFIG.paths.destAEM.components, '/**/*')
    ],

    // Aditional Options
    {
      force: true // NOTE: Cannot delete files/folders outside the current working directory. 'Force' is required.
    }
    );

  };
};


module.exports = cleanAEM;

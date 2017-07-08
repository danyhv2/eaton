'use strict';
/*
* Gulp Task: Cleans folders before running new builds
*/

const del = require('del');
const path = require('path');


const cleanAEM = function(gulp, CONFIG) {
  return function() {

    // Clean Build Folders
    //--------------
    del([

      // Delete Files, Not folders
      path.join(CONFIG.paths.destAEM.js, '/**/*'),
      path.join(CONFIG.paths.destAEM.css, '/**/*')
    ],

      // Aditional Options
      {

        // NOTE: Cannot delete files/folders outside the current working directory. 'Force' is required.
        force: true
      }

    );
  };
};


module.exports = cleanAEM;

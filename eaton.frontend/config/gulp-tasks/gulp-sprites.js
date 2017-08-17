'use strict';
/**
* TASK: Create Image Sprite
*/

const spritesmith = require('gulp.spritesmith');
const path = require('path');
var merge = require('merge-stream');

const buildImageSprite = function(gulp, CONFIG) {
  return function() {

    const spriteData = gulp.src('./src-assets/flag-sprite-icons/*.png')
      .pipe(spritesmith({
        imgName: 'flags-sprite.png',
        cssName: '_eaton-flags-sprite.scss',
        imgPath: '/images'
      }));

    // Pipe image stream to be generated in clientLibs folder
    const imgStream = spriteData.img
      .pipe(gulp.dest(path.join(CONFIG.paths.destAEM.clientlibStatic, 'global/css/images')));

    // Pipe CSS stream to be generated in clientLibs folder
    const cssStream = spriteData.css
      .pipe(gulp.dest(path.join(CONFIG.paths.srcRoot, '/global/css/base/')));

    // Return a merged stream to handle both `end` events
    return merge(imgStream, cssStream);

  }
};

module.exports = buildImageSprite;

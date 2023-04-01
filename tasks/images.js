const { src, dest } = require("gulp");
const path = require('./config/path.js');

// PLAGINS
const newer = require('gulp-newer');

const images = () => {
  return src(path.images.src)
    .pipe(newer(path.images.build))
    .pipe(dest(path.images.build))
};

module.exports = images;
const paths = {
  in: {
    'js': './src/js/',
    'img': './src/assets/img/',
    'html': './src/',
  },
  out: {
    'js': './dist/js',
    'img': './dist/assets/img/',
    'html': './dist/'
  }
}

const watchFiles = [
  "./src/js/*.js",
  "./src/js/**/*.js",
  "./src/js/filter/shader/*.frag",
  "./dist/*.html",
];

module.exports = class Variables {
  static getPaths(){
    return paths
  }

  static getWatchFiles() {
    return watchFiles
  }
}
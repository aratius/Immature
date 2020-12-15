const gulp = require("gulp");
const browserSync = require("browser-sync");
const Variables = require('../variables')

const paths = Variables.getPaths()

const browser_sync = (done) => {
  browserSync({
    server: {
      baseDir: paths.out.html,
      index: "index.html",
    },
  });
  done(); //doneしないとseriesの「次の処理に行かない
};

gulp.task('browser-sync', browser_sync)
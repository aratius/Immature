const gulp = require("gulp");
const browserSync = require("browser-sync");

const bs_reload = (done) => {
  browserSync.reload();
  done();
};

gulp.task('bs-reload', bs_reload)
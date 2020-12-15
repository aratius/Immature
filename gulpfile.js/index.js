//index.jsにする内容を記述していく
const gulp = require('gulp')
const gulpHub = require('gulp-hub')
const Variables = require('./variables')

const hub = new gulpHub(['./tasks/*.js'])
gulp.registry(hub)

const watch = (done) => {
  gulp.watch(Variables.getWatchFiles(), gulp.series('bundle', 'bs-reload'));
  done();
};

gulp.task('watch', watch)

gulp.task('default', gulp.series(
  'browser-sync',
  gulp.parallel(
    'img',
    'html',
    'bundle',
  ),
  'watch'
  ))
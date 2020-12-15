const gulp = require('gulp')
const Variables = require('../variables')

const paths = Variables.getPaths()

const html = (done) => {
  gulp.src(paths.in.html + '*.html')
  .pipe(gulp.dest(paths.out.html))
  done()
}

gulp.task('html', html)
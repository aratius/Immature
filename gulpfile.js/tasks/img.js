const gulp = require("gulp");
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const mozjpeg = require('imagemin-mozjpeg')
const changed = require('gulp-changed')
const Variables = require('../variables')

const paths = Variables.getPaths()

const imgmin = (done) => {
  gulp.src([paths.in.img + '*', paths.in.img + '**/*'])
  .pipe(changed( paths.in.out + '*' ))
  .pipe(imagemin([
    pngquant({ quality: [.6, .7], speed: 1 }),
    mozjpeg({ quality: 80 }),
    imagemin.svgo(),
    imagemin.gifsicle()
  ]))
  .pipe(gulp.dest(paths.out.img));
  done()
}

gulp.task('img', imgmin)
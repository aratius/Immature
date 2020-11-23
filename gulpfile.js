const gulp = require("gulp");
const connect = require("gulp-connect");
const browserSync = require("browser-sync");

const webpackStream = require("webpack-stream");
const webpack = require("webpack");
//webpack設定ファイルの読み込み
const webpackConfig = require("./webpack.config");

const browser_sync = (done) => {
  browserSync({
    server: {
      baseDir: "./dist",
      index: "index.html",
    },
  });
  done(); //doneしないとseriesの「次の処理に行かない
};

const bundle = (done) => {
  // ☆ webpackStreamの第2引数にwebpackを渡す☆
  webpackStream(webpackConfig, webpack).pipe(gulp.dest("dist/js"));
  done();
};

const bs_reload = (done) => {
  browserSync.reload();
  done();
};

const watchFiles = [
  "./src/*.js",
  "./src/js/*.js",
  "./src/js/**/*.js",
  "./src/js/filter/shader/*.frag",
  "./dist/*.html",
];

const watch = (done) => {
  gulp.watch(watchFiles, gulp.series(bundle, bs_reload));
  done();
};

//なんのため？
exports.browser_sync = browser_sync;
exports.bundle = bundle;
exports.bs_reload = bs_reload;
exports.watch = watch;

gulp.task("default", gulp.series(bundle, browser_sync, watch));

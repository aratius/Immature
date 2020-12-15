const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
//webpack設定ファイルの読み込み
const webpackConfig = require("../../webpack.config");
const Variables = require('../variables')

const paths = Variables.getPaths()

const bundle = (done) => {
  // ☆ webpackStreamの第2引数にwebpackを渡す☆
  webpackStream(webpackConfig, webpack).pipe(gulp.dest(paths.out.js));
  done();
};

gulp.task('bundle', bundle)
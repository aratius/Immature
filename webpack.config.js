//output.pathに指定するパスがOSによって異なることを防ぐためにpathモジュールを読み込んでおく
const path = require("path");

module.exports = {
  watch: true,
  //モードの設定
  mode: "development",
  //エントリーポイントの指定
  entry: "./src/index.js",
  //出力の設定
  output: {
    //出力するファイル名
    filename: "bundle.js",
    //保存先のパス
    path: path.resolve(__dirname, "dist/js"),
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json"],
  },
  //webpackが読めない形式のファイルはこんな感じで変換してやる必要がある
  module: {
    rules: [
      {
        test: /\.(frag|vert|glsl)$/,
        loader: "glsl-shader-loader",
        options: {},
      },
    ],
  },
};

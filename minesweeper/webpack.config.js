const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    filebuild: path.resolve(__dirname, 'js/script.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: '[name][ext]',
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  watch: true,
  devServer: {
    port: 8080,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(mp3|wav)$/,
        loader: 'file-loader',
      },
    ],
  },
};

const path = require('path');
const MODE = 'development';
const enabledSourceMap = MODE === 'development';

module.exports = {
  mode: MODE,
  entry: './src/main.ts',
  output: { 
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false, // オプションでCSS内のurl()メソッドの取り込みを禁止する
              sourceMap: enabledSourceMap,
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap
            },
          },
        ],
      }
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
  devServer: {
    contentBase: 'dist',
    open: true,
    watchContentBase: true,
  }
};
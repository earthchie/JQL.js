
const BabiliPlugin = require('babili-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'jql.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
      }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
    new BabiliPlugin(),
  ],
  resolve: {
    modules: [
      path.join(process.cwd(), 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.json'],
  },
  stats: {
    verbose: true,
  },
  devtool: false,
  externals: {
    react: 'React',
  },
};

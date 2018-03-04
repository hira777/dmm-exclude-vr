const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'exclude-vr': './src/exclude-vr.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
};

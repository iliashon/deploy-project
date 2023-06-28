'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './js/main.js',
    pets: './js/pets.js',
  },
  // ['./js/pets.js', './js/main.js'],
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};

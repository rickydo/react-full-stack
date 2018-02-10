var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './private/react/app.jsx',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'app.js'
  },
  module:{
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }

}

var webpack = require('webpack');

module.exports = {
  entry: './private/react/app.jsx',
  output: {
    path: __dirname + './public/',
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

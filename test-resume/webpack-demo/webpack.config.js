const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
	{loader: "style-loader"},
	{loader: "css-loader",options: { importLoaders: 1 }},
	{loader: "postcss-loader"},
	{loader: "sass-loader"} 
      ]
    }]
  }
};

const webpack = require('webpack');
const path = require('path');

module.exports = {
  cache: true,
  devtool: "eval",
  entry: path.join(__dirname, 'src','app-client.js'),
  output: {
    path: path.join(__dirname,'src','static','js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname,'src'),
      loader: ['babel-loader'],
      include: [path.join(__dirname,'src')],
      query: {
//        cacheDirectory: 'babel_cache',
        cacheDirectory: true,
        plugins: ['transform-regenerator'],
        presets: ['react','es2015']
      }
    }]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context:path.join(__dirname,'src'),
      manifest: require('./dll/vendor-manifest.json')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};

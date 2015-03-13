/*eslint no-var:0,strict:0*/
'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var env = process.env.NODE_ENV;

var entryPoints = [ './example/main' ];

if (env === 'development') {
  entryPoints.push('webpack-dev-server/client?http://0.0.0.0:8080');
  entryPoints.push('webpack/hot/only-dev-server');
}

var plugins = [
  new HtmlWebpackPlugin({
    filename : 'index.html',
    template : 'example/index.html',
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV' : JSON.stringify(env),
  }),
];

var output = {
  path : 'dist',
  pathinfo : true,
  filename : 'js/app-[hash].js',
  sourceMapFilename : 'js/app-[hash].map',
};

if (process.env.NODE_ENV === 'development') {
  plugins.push(new webpack.NoErrorsPlugin());
  output.devtoolModuleFilenameTemplate = 'file://[absolute-resource-path]';
  output.devtoolFallbackModuleFilenameTemplate = 'file://[absolute-resource-path]?[hash]';
}

module.exports = {
  entry : entryPoints,
  target : 'web',
  output : output,
  resolve : {
    root : __dirname,
    modulesDirectories : [ 'node_modules' ],
    extensions : [ '', '.js', '.jsx' ],
  },
  module : {
    noParse : /\.min\.js/,
    loaders : [
      {
        test : /\.jsx|js$/,
        exclude : /node_modules/,
        loaders : [ 'react-hot', 'babel' ]
      },
      {
        test : /\.json$/,
        loader : 'json'
      },
      {
        test : /\.css$/,
        loader : 'css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test : /\.png$/,
        loader : 'file?mimetype=image/png&name=images/[hash].[ext]'
      },
      {
        test : /\.gif$/,
        loader : 'file?mimetype=image/png&name=images/[hash].[ext]'
      },
      {
        test : /\.jpg$/,
        loader : 'file?mimetype=image/jpg&name=images/[hash].[ext]'
      },
      {
        test : /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader : 'url?mimetype=application/font-woff&name=assets/[hash].[ext]'
      },
      {
        test : /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader : 'url?mimetype=application/font-woff&name=assets/[hash].[ext]'
      },
      {
        test : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader : 'url?mimetype=application/octet-stream&name=assets/[hash].[ext]'
      },
      {
        test : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader : 'file?mimetype=application/vnd.ms-fontobject&name=assets/[hash].[ext]'
      },
      {
        test : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader : 'url?mimetype=image/svg+xml&name=images/[hash].[ext]'
      },
    ],
  },
  plugins : plugins,
};

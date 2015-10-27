var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './js/index.js' // Your appʼs entry point
  ],
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
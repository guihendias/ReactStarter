var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: ['./src/js/index.jsx'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
   new BrowserSyncPlugin({
     // browse to http://localhost:3000/ during development,
     // ./public directory is being served
     host: 'localhost',
     port: 3000,
     proxy: 'http://localhost:8080/'
   })
 ]
};

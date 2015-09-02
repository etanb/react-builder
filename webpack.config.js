'use strict';
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var mockObjects = false;

if(process.env.PROD){
  console.log('PRODUCTION mode');
}
else if(process.env.TEST){
  console.log('TEST mode');
  mockObjects = true;
}
else if(process.env.MOCK){
  console.log('MOCK mode');
  mockObjects = true;
}
else{
  console.log('DEVELOPMENT mode');
}

var plugins = [];
plugins.push(new ExtractTextPlugin('[name]'))// extract inline css into separate 'styles.css' file
plugins.push(new webpack.HotModuleReplacementPlugin());//@todo remove hmr and others on production builds
plugins.push(new webpack.NoErrorsPlugin());
plugins.push(new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}))

//only used browser side
var resolve = {
  alias: {
    'httpServiceConfiguration': path.resolve(__dirname, './src/services/httpService/config/environment/config' + (process.env.PROD ? '.build' : (process.env.MOCK ? '.mock' : '.dev' ) ) + '.js'),
    'pages': path.resolve(__dirname, './src/components/pages'),
    'sds': path.resolve(__dirname, './src/components/sds'),
    'sds-scss': '@salesforce-ux/landmark/scss/index.scss',
    'site': path.resolve(__dirname, './src/components/site'),
    // 'Sobj': './src/components/ sds/SObj/index.js'
    'sampleData': path.resolve(__dirname, './src/data/index.js'),
    'slds-sample-react': path.resolve(__dirname, './git_modules/slds-sample-react'),
    'slds-css': path.resolve(__dirname, './public/assets/slds-css'),
  },
  extensions: ['', '.js', '.jsx']
};

module.exports = {
  entry: {
    "js/bundle.js": [
      'webpack/hot/only-dev-server',
      "./src/init.jsx"
    ],
    "css/main.css": [
      "./src/style/main.scss"
    ]
  },
  output: {
    publicPath: "/assets/",
    filename: "[name]",
    path: "./build/assets"
  },
  cache: true,
  debug: process.env.PROD ? false : true,
  devtool: process.env.PROD ? false : "sourcemap",
  devServer: {
    contentBase: './public',
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  resolve: resolve,
  plugins: plugins
};
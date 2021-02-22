const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
let target = 'web';
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({ filename: 'bundle.css' }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
];

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist'; // Temporary workaround for 'browserslist' bug that is being patched in the near future
}

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin()); // We only want React Hot Reloading in serve mode
}

module.exports = {
  mode: mode, // mode defaults to 'production' if not set

  // Unnecessary in Webpack 5, because it's the default, but react-refresh-webpack-plugin can't find the entry without it.
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'), // output path is required for `clean-webpack-plugin`
    filename: 'bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]', // this places all images processed in an image folder
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' }, // This is required for asset imports in CSS, such as url()
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        /**
         * The `type` setting replaces the need for "url-loader"
         * and "file-loader" in Webpack 5.
         *
         * setting `type` to "asset" will automatically pick between
         * outputing images to a file, or inlining them in the bundle
         * with a default max inline size of 8kb
         */
        type: 'asset',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            /**
             * From the docs: When set, the given directory will be used
             * to cache the results of the loader. Future webpack builds
             * will attempt to read from the cache to avoid needing to run
             * the potentially expensive Babel recompilation process on each run.
             */
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  plugins: plugins,

  target: target,

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      Src: path.resolve(__dirname, './src'),
    },
  },

  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
};

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {

  entry: path.join(__dirname, '../src'),

  output: {
    path: path.join(__dirname, '../build/RestaurantSystem/'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss'],
    modules: ['node_modules', path.join(__dirname, '../src')],
  },

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader",
        options: {
          context: path.join(__dirname, '../src/'),
          name: '[path][name].[ext]',
        }
      },
      {
        test: /\.svg$/,
        loader: "file-loader",
        options: {
          context: path.join(__dirname, '../src/'),
          name: '[path][name].[ext]',
        }
      }
    ]
  },

  optimization: {
    moduleIds: 'hashed',
    nodeEnv: 'production',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        },
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer(),
        ]
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets',
          to  : 'assets'
        }
      ]
    })
  ]
};

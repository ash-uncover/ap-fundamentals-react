/* eslint-disable */

const path = require('path')

const DIR_DOCS = path.resolve(__dirname, 'docs')
const DIR_SRC = path.resolve(__dirname, 'src')
const DIR_NODE_MODULES = path.resolve(__dirname, 'node_modules')

const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(DIR_SRC, 'index-docs.tsx'),

  output: {
    clean: true,
    path: DIR_DOCS,
    filename: 'docs.bundle.js',
    publicPath: '/',
  },

  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '_redirects'), to: '.' },
        { from: path.resolve(__dirname, 'public'), to: '.' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/index-docs.html',
      title: 'Fundamentals React',
      publicPath: '/ap-fundamentals-react'
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /.(jsx|js)$/,
        include: DIR_SRC,
        exclude: DIR_NODE_MODULES,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.tsx?$/,
        include: DIR_SRC,
        exclude: DIR_NODE_MODULES,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.webpack.json'
            }
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
    ],
  },
}

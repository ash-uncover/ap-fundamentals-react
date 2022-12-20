/* eslint-disable */

const { merge } = require('webpack-merge')
const base = require('./webpack.config.base.js')

const path = require('path')

const DIR_DIST = path.resolve(__dirname, 'dist-dev')
const DIR_SRC = path.resolve(__dirname, 'src')
const DIR_PUBLIC = path.resolve(__dirname, 'public')
const DIR_NODE_MODULES = path.resolve(__dirname, 'node_modules')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const transformFonts = (buffer) => {
  let data = buffer.toString()
  data = data
    .split('@sap-theming/theming-base-content/content/Base/baseLib/baseTheme')
    .join('')
  data = data
    .split('@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon')
    .join('')
  return data
}

module.exports = merge(base, {
  entry: path.resolve(DIR_SRC, 'index.tsx'),

  output: {
    clean: true,
    path: DIR_DIST,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/fonts/sap_fonts.css'), to: '.', transform: transformFonts },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/fonts/sap_fiori_3_fonts.css'), to: './sap_fiori_3_fonts.css', transform: transformFonts },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/fonts/sap_horizon_fonts.css'), to: './sap_horizon_fonts.css', transform: transformFonts },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'React Fundamentals',
    }),
  ],

  devtool: 'source-map',

  devServer: {
    static: {
      directory: DIR_PUBLIC,
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
})

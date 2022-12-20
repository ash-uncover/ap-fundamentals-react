/* eslint-disable */

const { merge } = require('webpack-merge')
const base = require('./webpack.config.base.js')

const path = require('path')

const DIR_DOCS = path.resolve(__dirname, 'docs')
const DIR_SRC = path.resolve(__dirname, 'src')
const DIR_NODE_MODULES = path.resolve(__dirname, 'node_modules')

const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const transformFonts = (buffer) => {
  let data = buffer.toString()
  data = data
    .split('@sap-theming/theming-base-content/content/Base/baseLib/baseTheme')
    .join('/ap-fundamentals-react')
  data = data
    .split('@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon')
    .join('/ap-fundamentals-react')
  return data
}


module.exports = merge(base, {
  entry: path.resolve(DIR_SRC, 'index-docs.tsx'),

  output: {
    clean: true,
    path: DIR_DOCS,
    filename: 'docs.bundle.js',
    publicPath: '/',
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '_redirects'), to: '.' },
        { from: path.resolve(__dirname, 'public'), to: '.' },

        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/fonts/sap_fonts.css'), to: '.', transform: transformFonts },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/fonts/sap_fiori_3_fonts.css'), to: './sap_fiori_3_fonts.css', transform: transformFonts },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/fonts/sap_horizon_fonts.css'), to: './sap_horizon_fonts.css', transform: transformFonts },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/index-docs.html',
      title: 'Fundamentals React',
      publicPath: '/ap-fundamentals-react'
    }),
  ],
})

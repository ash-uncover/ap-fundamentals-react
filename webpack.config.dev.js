/* eslint-disable */

const { merge } = require('webpack-merge')
const base = require('./webpack.config.base.js')

const path = require('path')

const DIR_DIST = path.resolve(__dirname, 'dist-dev')
const DIR_SRC = path.resolve(__dirname, 'src')
const DIR_PUBLIC = path.resolve(__dirname, 'public')
const DIR_NODE_MODULES = path.resolve(__dirname, 'node_modules')

const CopyPlugin = require('copy-webpack-plugin')
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
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/fundamental-styles.css'), to: '.' },

        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/fonts/sap_fonts.css'), to: '.', transform: transformFonts },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/fonts/sap_fiori_3_fonts.css'), to: './sap_fiori_3_fonts.css', transform: transformFonts },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/fonts/sap_horizon_fonts.css'), to: './sap_horizon_fonts.css', transform: transformFonts },

        { from: path.resolve(DIR_NODE_MODULES, '@sap-theming/theming-base-content/content/Base/baseLib/baseTheme/fonts'), to: './fonts' },

        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/theming/sap_fiori_3.css'), to: './sap_fiori_3.css' },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/theming/sap_fiori_3_dark.css'), to: './sap_fiori_3_dark.css' },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/theming/sap_fiori_3_hcb.css'), to: './sap_fiori_3_hcb.css' },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/theming/sap_fiori_3_hcw.css'), to: './sap_fiori_3_hcw.css' },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/theming/sap_fiori_3_light_dark.css'), to: './sap_fiori_3_light_dark.css' },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/theming/sap_horizon.css'), to: './sap_horizon.css' },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/theming/sap_horizon_dark.css'), to: './sap_horizon_dark.css' },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/theming/sap_horizon_hcb.css'), to: './sap_horizon_hcb.css' },
        { from: path.resolve(DIR_NODE_MODULES, 'fundamental-styles/dist/theming/sap_horizon_hcw.css'), to: './sap_horizon_hcw.css' },

        { from: path.resolve(DIR_NODE_MODULES, '@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/css_variables.css'), to: './sap_fiori_3_variables.css' },
        { from: path.resolve(DIR_NODE_MODULES, '@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3_dark/css_variables.css'), to: './sap_fiori_3_dark_variables.css' },
        { from: path.resolve(DIR_NODE_MODULES, '@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3_hcb/css_variables.css'), to: './sap_fiori_3_hcb_variables.css' },
        { from: path.resolve(DIR_NODE_MODULES, '@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3_hcw/css_variables.css'), to: './sap_fiori_3_hcw_variables.css' },
        { from: path.resolve(DIR_NODE_MODULES, '@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3_light_dark/css_variables.css'), to: './sap_fiori_3_light_dark_variables.css' },
        { from: path.resolve(DIR_NODE_MODULES, '@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css'), to: './sap_horizon_variables.css' },
        { from: path.resolve(DIR_NODE_MODULES, '@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon_dark/css_variables.css'), to: './sap_horizon_dark_variables.css' },
        { from: path.resolve(DIR_NODE_MODULES, '@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon_hcb/css_variables.css'), to: './sap_horizon_hcb_variables.css' },
        { from: path.resolve(DIR_NODE_MODULES, '@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon_hcw/css_variables.css'), to: './sap_horizon_hcw_variables.css' },
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

const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode:"production",
  output: {
    filename: "[name]-[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
        new OptimizeCssAssetsPlugin(), //minify css
        new TerserPlugin(), // minify js
        new HtmlWebpackPlugin({ //minify html
            template: './src/template.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ]
  },
  plugins: [new MiniCssExtractPlugin({// extract css from html to separated css file
    filename: "[name].[contentHash].css"
  }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ]
      },
      {
        test : /\.css$/i,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
        ]
      }
    ]
  }
});

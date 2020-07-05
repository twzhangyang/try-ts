const path = require("path");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: "[name].[hash].[ext]",
                    outputPath: 'images',
                },
            }
        ]
    }
}

const path = require('path');

module.exports = {
    // used form source map
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    // used form ES module
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        // used for live compile
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

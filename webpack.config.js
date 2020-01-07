const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const {
    NODE_ENV = 'production',
} = process.env;
module.exports = {
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'calender.js',
        libraryTarget: 'var',
        library: 'Calender'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },
    watch: false,
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true
                }
            })
        ]
    },
}
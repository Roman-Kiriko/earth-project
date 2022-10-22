const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


const PATH =  {
    source: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'dist'),
};

module.exports = {
    entry: './src/index.js',
    output: {
        path: PATH.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }

};
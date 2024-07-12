const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function (__env, args) {
    // if(__env ==="production") ...   
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.[contenthash:8].js"
        },
        target: ["web", "es5"],
        module: {
            rules: [
                {
                    test: /^\.jsx?$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"]
        },
        devServer: {
            port: 1234
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            })
        ]
    }
}
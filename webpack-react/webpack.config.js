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
        devtool : 'cheap-module-source-map',
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
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
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            })
        ]
    }
}
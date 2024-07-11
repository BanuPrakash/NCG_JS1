const path = require('path');

module.exports = function(__env, args) {
    // if(__env ==="production") ...   
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.[contenthash:8].js"
        },
        module: {
            rules: [
                {
                    test: /^\.jsx?$/,
                    use: 'babel-loader'
                },
                {
                    test: /^.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"]
        }
    }
}
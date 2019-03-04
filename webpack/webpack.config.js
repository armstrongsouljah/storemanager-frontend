var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");


var parentDir = path.join(__dirname, "../");

module.exports = {
    entry: [
        path.join(parentDir, "src/index.js"),
    ],
    resolve: {
        extensions: [".jsx", ".js",],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },{
            test: /\.less$/,
            loaders: ["style-loader", "css-loder", "less-loader",],
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
    ],
    output: {
        path: parentDir + "/dist",
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true,
    },
};

/* eslint-disable comma-spacing */
const Dotenv = require("dotenv-webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const parentDir = path.join(__dirname, "../");

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
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "less-loader",],
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new Dotenv({
            path: path.join(__dirname, "../.env"),
            systemvars: true,
        }),
    ],
    output: {
        path: `${parentDir}/dist`,
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true,
    },
};

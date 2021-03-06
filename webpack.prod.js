const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    output:{
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    optimization: {
        minimizer: [
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                minify: {
                    removeAttributeQuotes:true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
            }
        ]
    }
});
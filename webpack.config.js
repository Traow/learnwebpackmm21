const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output : {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"],
          },
        ],
      },
    plugins: [new HtmlWebpackPlugin({
        title: 'Robin on Gobllin lmao',
        template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
};
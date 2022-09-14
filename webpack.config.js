const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require('glob');

let htmlPlugins = [];

let files = glob.sync('./src/views/*.twig');
files.forEach(file => {
  let htmlPlugin = new HtmlWebpackPlugin({
    filename: file.split('/').at(-1).replace('twig','html'),
    template: file
  });
  htmlPlugins.push(htmlPlugin);
});

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
          {
            test: /\.twig$/,
            use: {
              loader: 'twig-loader',
              options: {
                  // See options section below
              },
            }
        }
        ],
      },
    plugins: [
        ...htmlPlugins,
    new MiniCssExtractPlugin()
    ],
};
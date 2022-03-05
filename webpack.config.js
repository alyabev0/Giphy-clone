const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "./src/index/index.html")
        })
    ],
    devServer: {
        port: 8000,
        historyApiFallback: true,
        hot: true,
    },
    module: {
        rules: [
        //   {
        //     test: /\.css$/,
        //     include: [
        //       path.join(__dirname, 'src')
        //     ],
        //     use: ['style-loader', 'css-loader']
        //   },
          {
            test   : /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
      }
}
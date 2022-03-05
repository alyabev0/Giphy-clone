const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'assets/images/[name][ext]'
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
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            type: 'asset/resource',
          },
          {
            test: /\.(woff2?|eot|ttf|otf)$/,
            type: 'asset/resource',
          },
          {
            test: /\.html$/,
            use: 'html-loader'
        },
        ]
      }
}
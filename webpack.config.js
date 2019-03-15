const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports  = (env,argv) => {
  return {
    optimization: {
      nodeEnv: argv.mode
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader:  'babel-loader'
          }
        },
        {
          test: /\.(sc|c)ss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64:5]",
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
  }
}

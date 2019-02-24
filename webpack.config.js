const path = require('path')

const prefixer = require('postcss-prefixer')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'node_modules/bulma')],
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'node_modules/bulma')],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                prefixer({
                  prefix: 'bu-'
                })
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true
  }
}

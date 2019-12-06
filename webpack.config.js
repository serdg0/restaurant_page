const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader'
        ]
      }
    ]
  }
};
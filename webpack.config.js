const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    inboxElements: './src/inboxElements.js',
    fooElements: './src/checkUiPage.js',
    todayElements: './src/todayElements.js',
    weekElements: './src/weekElements.js', 
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
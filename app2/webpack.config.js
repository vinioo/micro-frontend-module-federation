const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/", // URL publica da aplicação
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i, // Configuração do loader de CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      library: { type: 'var', name: 'app2' },
      filename: 'remoteEntry.js', // Nome do arquivo de entrada para ser importado no HTML do projeto que utilizará o mesmo
      exposes: {
        // expor cada componente desejado
        './Builder': './src/components/Builder',
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index', // Porta de entrada da aplicação
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
  output: {
    publicPath: "http://localhost:3000/", 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Configuração do loader para React
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({ // Configuração Module Federation
      name: 'app1',
      library: { type: 'var', name: 'app1' },
      remotes: { // Definição de quais projetos poderão ser carregados em tempo de execução
        app2: 'app2',
      },
      shared: ['react', 'react-dom'], // Dependências a serem compartilhadas
    }),
    new HtmlWebpackPlugin({ // Inicialização do live server
      template: './public/index.html',
    }),
  ],
};
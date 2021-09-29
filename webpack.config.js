// padrão para chamar o diretorio de uma forma sem bug em windows
const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // modulo que carrega a primeira tela, ele chama o patch, o diretorio e o arquivo para executar
  entry: path.resolve(__dirname, "src", "index.jsx"),

  mode: 'development', // ai ele otimiza qnd eu usar  o yarn weback no ambiente de dev (diminuiu 6 segundos)

  // Aqui é o caminho da saida
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },

  plugins: [

    new htmlWebpackPlugin( {

      template: path.resolve(__dirname, 'public', 'index.html') //faz com quem gere um HMTL dentro da pasta dist
    })

  ],

  module: {
    rules: [
      {
        //quero verificas se a extesao é jsx
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};

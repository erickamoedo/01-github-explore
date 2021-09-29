// padrão para chamar o diretorio de uma forma sem bug em windows
const path = require("path");

module.exports = {
  // modulo que carrega a primeira tela, ele chama o patch, o diretorio e o arquivo para executar
  entry: path.resolve(__dirname, "src", "index.jsx"),

  // Aqui é o caminho da saida
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
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

// padrão para chamar o diretorio de uma forma sem bug em windows
const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV != 'production';

module.exports = {
  
  entry: path.resolve(__dirname, "src", "index.jsx"), // modulo que carrega a primeira tela, ele chama o patch, o diretorio e o arquivo para executar
  devtool: isDevelopment ? 'eval-source-map' : 'source-map' , // faz roadmap de erros mostrar a linha exata no chrome
  mode: isDevelopment ? 'development' : 'production', // verifica qual ambiente esta e  ai ele otimiza qnd eu usar  o yarn weback no ambiente de dev (diminuiu 6 segundos)
  output: { // Aqui é o caminho da saida
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
     devServer: {    // aqui eu passo o path da minha aplicacao e ele atualiza o bundle sem eu precisar ficar dando yarn webpack no terminal
    static: {
      directory: path.resolve(__dirname, 'public') // basta executar yarn webpack serve
  },
    
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
      },
      {
        //quero verificas se a extesao é css
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader" ]
      }


    ]
  }
};

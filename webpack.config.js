// padrão para chamar o diretorio de uma forma sem bug em windows
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV != "production";

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"), // modulo que carrega a primeira tela, ele chama o patch, o diretorio e o arquivo para executar
  devtool: isDevelopment ? "eval-source-map" : "source-map", // faz roadmap de erros mostrar a linha exata no chrome
  mode: isDevelopment ? "development" : "production", // verifica qual ambiente esta e  ai ele otimiza qnd eu usar  o yarn weback no ambiente de dev (diminuiu 6 segundos)
  output: {
    // Aqui é o caminho da saida
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  devServer: {
    // aqui eu passo o path da minha aplicacao e ele atualiza o bundle sem eu precisar ficar dando yarn webpack no terminal
    static: path.resolve(__dirname, "public"),
    hot: true
  },

  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html") //faz com quem gere um HMTL dentro da pasta dist
    })
  ].filter(Boolean), // hack para remover true ou false lá de dentro e o codigo nao crasha. Aula de > Fast Refresh no Webpack

  module: {
    rules: [
      {
        //quero verificas se a extesao é jsx
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel")
            ].filter(Boolean) // hack para remover true ou false lá de dentro e o codigo nao crasha. Aula de > Fast Refresh no Webpack
          }
        }
      },
      {
        //quero verificas se a extesao é css
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};

const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

  mode: 'development',

  output: { 
    clean: true
  },

  module: {
      rules: [
          {
              test: /\.html$/i,
              loader: 'html-loader',
              options: {
                      sources: false,
                      attributes: false,
                      minimize: false, 
                  },
              
                
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /styles.css$/,
            use: [MiniCssExtract.loader, 'css-loader']
          },
          {
            test:/\.(png|jpe?g|gif)$/,
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          }

          
          
            
        ]
  },
  plugins:[
      new HtmlWebPack({
          title: 'mi webpack app',
          template: './src/index.html',
        //  filename: './index.html'
      }),

      new MiniCssExtract({
        filename: '[name].css',
        ignoreOrder: false
      }),

      new CopyPlugin({
        patterns:[
          { from: 'src/assets/', to:'assets/'}
        ]
      })


    ]
}

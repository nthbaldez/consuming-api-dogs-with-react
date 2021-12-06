const path = require('path');
// Como o webpack roda com o Node, por isso do require
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
// Aqui iremos passar o nome e diretório do arquivo de entrada
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
// Aqui, o canal de saída com o nome
    output: { 
        path: path.resolve(__dirname, 'dist', ''),
        filename: "bundle.js"
    },
// Aqui, configuramos as extensões que devem funcionar
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        hot: true,
        static: {
            directory: path.resolve(__dirname, 'public'),
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
// Aqui vão ficar as configs de como a nossa aplicação vai se comportar importando cada um dos tipos de arquivos
    module: {
        rules: [
            {
                test: /\.jsx$/, // expressão regular pra dizer se o arquivo é JavaScript ou não ( boolean )
                exclude: /node_modules/, // excluir todos os arquivos da pasta node_modules, pois todos os arquivos aqui já são configurados para o browser entender
                use: 'babel-loader' // a integração entre o babel e o webpack

            },
            {
                test: /\.scss$/, // expressão regular pra dizer se o arquivo é CSS ou não ( boolean )
                exclude: /node_modules/, // excluir todos os arquivos da pasta node_modules, pois todos os arquivos aqui já são configurados para o browser entender
                use: ['style-loader', 'css-loader', 'sass-loader'] // os dois loaders necessários para importação de arquivos css
            }            
        ],   
    }
}